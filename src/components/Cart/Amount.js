import React from "react";
import classes from "./Amount.module.css"

const Amount = props => 
  <div className={classes.amount_wrapper}>
    <div>{props.amount}X</div>
    <div className={classes.btn_wrapper}>
      <button onClick={props.onAdd}>+</button>
      <button onClick={props.onRemove}>-</button>
    </div>

  </div>

export default Amount