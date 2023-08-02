import "./TshirtItem.css";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const TshirtItem = (props) => {
  const myCtx = useContext(MyContext);

  const smallBtnHandler = () => {
    myCtx.addItemHandler({
      id: props.id,
      name: props,
      desc: props.desc,
      price: props.price,
      small: 1,
      medium: 0,
      large: 0,
    });
  };

  const mediumBtnHandler = () => {
    myCtx.addItemHandler({
      id: props.id,
      name: props,
      desc: props.desc,
      price: props.price,
      small: 0,
      medium: 1,
      large: 0,
    });
  };

  const largeBtnHandler = () => {
    myCtx.addItemHandler({
      id: props.id,
      name: props,
      desc: props.desc,
      price: props.price,
      small: 0,
      medium: 0,
      large: 1,
    });
  };

  return (
    <li className="tshirt-item">
      <div className="tshirt-name">{props.name}</div>
      <div className="description">{props.desc}</div>
      <div className="price">{props.price}</div>
      <div className="actions">
        <button type="button" className="btn buy" onClick={smallBtnHandler}>
          <p>Buy Small</p>
          <span>({props.small})</span>
        </button>
        <button type="button" className="btn buy" onClick={mediumBtnHandler}>
          <p>Buy Medium</p>
          <span>({props.medium})</span>
        </button>
        <button type="button" className="btn buy" onClick={largeBtnHandler}>
          <p>Buy Large</p>
          <span>({props.large})</span>
        </button>
      </div>
    </li>
  );
};

export default TshirtItem;
