import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import MyContext from "../../store/MyContext";

const Backdrop = (props) => {
  return <div className={props.show?'backdrop':''}></div>;
};

const ModalOverlay = (props) => {
  return <div className="modal-overlay">{props.children}</div>;
};

const Modal = (props) => {

  const myCtx = useContext(MyContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop show={myCtx.showCart} />, document.getElementById("overlay"))}
      {myCtx.showCart && ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
