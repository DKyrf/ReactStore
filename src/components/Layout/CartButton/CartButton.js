import React, { useContext } from "react";
import {FaCartArrowDown} from "react-icons/fa";
import OrderContext from "../../../store/order-context";
import classes from "./CartButton.module.css";

const CartButton = props => {
  const cartCTX = useContext(OrderContext);

  const numberOfItems = cartCTX.items
  .reduce((previous, current) => previous + Number(current.amount), 0);

  return (
    <React.Fragment>

      <button onClick={props.handleCartOpen} className={classes.cart_wrapper}>
      <div className={classes.cart_icon}>
        <FaCartArrowDown className={classes.img}/>
      </div>
        <div className={classes.cart_counter}>{numberOfItems}</div>
      </button>

    </React.Fragment>
  )
}
export default CartButton