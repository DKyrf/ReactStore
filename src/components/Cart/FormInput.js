import React, { Fragment } from "react";
import useValidator from "../../hooks/useValidator";
import classes from "./FormInput.module.css"

const FormInput = React.forwardRef((props, ref) => {
    
    let messege

    const validator = (inputTarget) => {

        if(props.id !== "email"){
            messege = `String "${props.id}" should not be empty.`
            return inputTarget.trim() !== ""
        }else{
            messege = `String with e-mail should contain "@" mark`
            return inputTarget.includes("@")
        }

    };

    const {
        value,
        inputValueHandler,
        inputBlurHandler,
        isInputValid,
        hasError,
    } = useValidator(validator)

    props.validityHandler(isInputValid)

    let formClass = hasError ? classes.invalid : ""

    return (
        <Fragment>
        <div className={classes.form_control}>
            <label htmlFor={props.id}>{props.content}:</label>
            <input 
            className={formClass}
            value={value}
            onBlur={inputBlurHandler} 
            onChange={inputValueHandler} 
            ref={ref} 
            type={props.type} 
            id={props.id} />
        </div>
        {hasError && <p className={classes.error_messedge}>{messege}</p>}
        </Fragment>
        
    )
})

export default FormInput

