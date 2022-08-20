import React, {Fragment} from "react";
import CartButton from "../CartButton/CartButton";
import classes from "./Header.module.css"

const Header = props =>
  <Fragment> 
    <div className={classes.header_wrapper}>
      <div className={classes.header_title}>
        <h1>ReactStore</h1>
      </div>

      <CartButton handleCartOpen={props.openWindow}/>
    
    </div>

    <div className={classes.img_wrapper}>
      <img alt="iphones" src="https://fdn.gsmarena.com/imgroot/news/21/09/apple-event-roundup/-1220x526/gsmarena_002.jpg" />
    </div>

  </Fragment>
  
export default Header