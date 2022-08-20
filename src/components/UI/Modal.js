import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalBackground = (props) =>  <div className={classes.backdrop__wrapper} onClick={props.onClick}/>

const ModalWindow = (props) => 
        <div className={classes.madal__wrapper}>
          <div> {props.children} </div>
        </div>

const overlaysRoot = document.getElementById("overlays")

const Modal = (props) => 
        <Fragment>
            {ReactDOM.createPortal(<ModalBackground onClick={props.onClick} />, overlaysRoot)}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, overlaysRoot)}
        </Fragment>

export default Modal;
