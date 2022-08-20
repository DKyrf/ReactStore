import React from "react";
import classes from "./ElectronicsBTN.module.css"

const ElectronicsBTN = (props) => 
  <button disabled={props.disabled} className={`${classes.electronics_button} + ${props.className}`} onClick={props.onClick}>
    {props.children}  
  </button>

export default ElectronicsBTN