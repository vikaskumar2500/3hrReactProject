import { useReducer } from "react";
import MyContext from "./MyContext";
import React, { useState } from "react";

const defaultState = {
  items: [],
  totalPrice: 0,
};

const tshirtReducer = (state, action) => {
  if (action.type === "ADD") {
    const tshirtItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (tshirtItemIndex !== -1) {
      state.items[tshirtItemIndex].small += action.item.small;
      state.items[tshirtItemIndex].medium += action.item.medium;
      state.items[tshirtItemIndex].large += action.item.large;
      return {
        items: state.items,
        totalPrice: state.totalPrice + action.item.price,
      };
    } else {
      return {
        items: [action.item, ...state.items],
        totalPrice: state.totalPrice + action.item.price,
      };
    }
  } else if (action.type === "DELETE") {
    const tshirtItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const totalAmount =
      state.items[tshirtItemIndex].small +
      state.items[tshirtItemIndex].medium +
      state.items[tshirtItemIndex].large;

    return {
      items: state.items.filter((item) => item.id !== action.id),
      totalPrice:
        state.totalPrice - totalAmount * state.items[tshirtItemIndex].price,
    };
  }
};

const ContextProvider = (props) => {
  const [tshirtList, setTshirtList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [tshirtState, dispatchTshirt] = useReducer(tshirtReducer, defaultState);

  const addTshirtItemHandler = (item) => {
    console.log(item);
    setTshirtList((prevState) => {
      return [item, ...prevState];
    });
  };

  const showCartHandler = (show) => {
    setShowCart(show);
  };

  const addItemHandler = (item) => {
    dispatchTshirt({ type: "ADD", item: item });
  };

  const deleteItemHandler = (id) => {
    dispatchTshirt({ type: "DELETE", id: id });
  };

  console.log(tshirtList);
  return (
    <MyContext.Provider
      value={{
        TshirtList: tshirtList,
        addTshirtItem: addTshirtItemHandler,
        showCart: showCart,
        showCartHandler: showCartHandler,
        items: tshirtState.items,
        totalPrice: tshirtState.totalPrice,
        addItemHandler: addItemHandler,
        deleteItemHandler: deleteItemHandler,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
