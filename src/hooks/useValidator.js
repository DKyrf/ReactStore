import { useReducer } from "react";

const defaultReducer = {
    val: "",
    isTouched: false,
}

const reducerFn = (prevValue, action) => {
    if(action.type === "BLUR"){

        return {
            val: prevValue.val,
            isTouched: true,
        }
    }

    if(action.type === "TYPE"){

        return {
            val: action.val,
            isTouched: prevValue.isTouched,
        }
    };

    if(action.type === "RESET"){

        return {
            val: "",
            isTouched: false,
        }
    }

    return defaultReducer
}

const useValidator = (validator) => {

    const [inputValue, dispatchFn] = useReducer(reducerFn, defaultReducer);

    const isInputValid = validator(inputValue.val)

    let hasError = !isInputValid && inputValue.isTouched

    const inputValueHandler = (event) => {
        dispatchFn({type: "TYPE", val: event.target.value})
    };

    const inputBlurHandler = (event) => {
        dispatchFn({type: "BLUR"})
    };

    const reset = () => {
        dispatchFn({type: "RESET"})
    }

    return {
        value: inputValue.val,
        inputValueHandler,
        inputBlurHandler,
        isInputValid,
        hasError,
        reset,
    }
};

export default useValidator