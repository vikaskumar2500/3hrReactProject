import Modal from "../UI/Modal";
import "./CartList.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";
import CartItem from "./CartItem";

const CartList = () => {
  const myCtx = useContext(MyContext);

  const closeButtonHandler = () => {
    myCtx.showCartHandler(false);
  };

  return (
    <Modal>
      {/* <div>CartItem</div> */}
      <ul className="cart-list">
        {myCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            small={item.small}
            medium={item.medium}
            large={item.large}
          />
        ))}
      </ul>
      <div className="total-price">
        <h2>Total Price</h2>
        <span>0</span>
      </div>
      <div className="list-actions">
        <button
          type="button"
          className="btn cartList-btn"
          onClick={closeButtonHandler}
        >
          Close
        </button>
        <button type="button" className="btn cartList-btn">
          Place Order
        </button>
      </div>
    </Modal>
  );
};

export default CartList;
