import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal"
import ElectronicsBTN from "../UI/ElectronicsBTN";
import Amount from "./Amount";
import OrderContext from "../../store/order-context";
import LoginForm from "./LoginForm";
import classes from "./Cart.module.css"

const Cart = props => {
  
  const [formToggled, setFormToggled] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    setFormToggled(false)
    setOrderCompleted(false)
  }, [])

  const cartCTX = useContext(OrderContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

  const addHandler = (item) => cartCTX.addItem({...item, amount: 1});

  const removeHandler = (id) => cartCTX.deleteItem(id);

  const listOfDishes = (
    <ul className={classes.list}>
      {cartCTX.items.map(dish => (
        <li key={dish.id} className={classes.item}>
        <div className={classes.item_wrapper}>
          <div> 
            <h3>{dish.name} <span>${dish.totalPrice.toFixed(2)}</span> </h3> 
          </div>
            <Amount 
              amount={dish.amount}
              onAdd={addHandler.bind(null, dish)}
              onRemove={removeHandler.bind(null, dish.id)} 
            />        
        </div>
        </li>
      ))}
    </ul>
    );

    const sandHandler = () => {
        setFormToggled(false);
        setOrderCompleted(true);
    };


    return(
        <Modal onClick={props.closeWindow}>

        {listOfDishes}

        {!orderCompleted && <div className={classes.total}>
          <span>TOTAL AMOUNT: </span>
          <span>{totalAmount}</span>
        </div>}

        {!formToggled && !orderCompleted && <div className={classes.actions}>
          <ElectronicsBTN onClick={props.closeWindow} className={classes.close__btn}>Cancel</ElectronicsBTN>
          <ElectronicsBTN onClick={()=> setFormToggled(true)}>Order</ElectronicsBTN>
        </div>}

        {formToggled && <LoginForm formController={sandHandler} />}
        {orderCompleted && <p className={classes.notification}> Order processing, please wait till our manager contact you. </p>}

        </Modal> 
    )
}

export default Cart


