import "./Cart.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const Cart = (props) => {
  const myCtx = useContext(MyContext);
  const cartButtonHandler = () => {
    myCtx.showCartHandler(true);
  };

  return (
    <button type="button" className="cart-button" onClick={cartButtonHandler}>
      <div className="your-cart">Your Cart</div>
      <div className="badge">0</div>
    </button>
  );
};

export default Cart;
