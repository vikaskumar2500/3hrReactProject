import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li key={props.id} className="cart-item">
      <div className="name">{props.name}</div>
      <div className="sizes">
        {props.large !== 0 && <div className="large">{props.large}L</div>}
        {props.medium !== 0 && <div className="large">{props.medium}M</div>}
        {props.small !== 0 && <div className="large">{props.small}S</div>}
      </div>
      <button type="button" className="btn deleteBtn">
        Delete
      </button>
    </li>
  );
};

export default CartItem;
