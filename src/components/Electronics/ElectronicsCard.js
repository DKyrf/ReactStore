import React, { useContext, useRef } from "react";
import Input from "../UI/Input"
import OrderContext from "../../store/order-context";
import ElectronicsBTN from "../UI/ElectronicsBTN";
import classes from "./ElectronicsCard.module.css"



const ElectronicsCard = (props) => {

  const inputRef = useRef();
  const cartCTX = useContext(OrderContext);

  const onAdd = item => {

    item.preventDefault();

    const orderItem = {
      id: `order_item_${props.id}`,
      name: props.name,
      price: props.price,
      amount: inputRef.current.value,
      totalPrice: (props.price * inputRef.current.value)
    };

    cartCTX.addItem(orderItem);

  };

    return (

        <li className={classes.electronicsCard_wrapper}>

          <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span className={classes.electronics_price}>${props.price}</span>
          </div>

          <div>
            <Input submitHandler={onAdd} ref={inputRef} id={props.id} label="Amount" className={classes.electronics_add}
            properties={{type:"number", defaultValue: 1,
            min:1, max: 10}}>
                <ElectronicsBTN>Add Item</ElectronicsBTN>
            </Input>            
          </div>

        </li>
    )
}
export default ElectronicsCard