import React from "react";
import classes from "../Electronics/ElectronicsCard.module.css"


const Input = React.forwardRef((props, ref) => 
  <form onSubmit={props.submitHandler} className={props.className}>
    <div className={classes.meals_item}>
      <label htmlFor={props.id}>{props.label}:</label>
      <input ref={ref} id={props.id} {...props.properties}/>
    </div>

    {props.children}
  
  </form>
        
    )


export default Input