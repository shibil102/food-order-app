import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};
const CartModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const layOut = document.getElementById("layout");

  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClick={props.onClose} />, layOut)}
      {ReactDom.createPortal(<CartModal>{props.children}</CartModal>, layOut)}
    </Fragment>
  );
};

export default Modal;
