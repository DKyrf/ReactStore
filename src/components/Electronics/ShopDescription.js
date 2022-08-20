import React from "react";
import Card from "../UI/Card";
import classes from "./ShopDescription.module.css"

const ShopDescription = () => 
  <Card className={classes.summary_wrapper}>
    <h2>TechnoPark</h2>
    <p>
    Where to look for gadgets and accessories of your dreams? Of course, in TechnoPark! Today, we share a vibrant mood in a network of stores across World, 
    the online store www.tecnopark.ca, personal transport rental points and high-quality service centers.
    <p>
    Look for a true fan in the VR & Entertainment area, and be sure to choose action cameras in Photos & Videos for those who enjoy outdoor activities. You will also find incredible personal transportation and more.
    Welcome to the kids. Not only do we have a 3D creativity department where the true magic of 3D is living. There is also a large children's entertainment area. Have the kids play while you choose your dream device!    </p>
    </p>
  </Card>

export default ShopDescription