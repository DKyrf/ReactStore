import React, { Fragment, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../UI/Card";
import ElectronicsCard from "./ElectronicsCard";
import classes from "./Electronics.module.css"


const Electronics = () => {
    const [electronics, setElectronics] = useState([]);
    const {isError, isLoading, fetchData,} = useFetch();


    useEffect(() => {
        const grabData = (data) => setElectronics(data);
        fetchData({url: "https://reactapp-6881c-default-rtdb.firebaseio.com/tech.json"}, grabData);
    }, [fetchData]);

    let content = 
    <Card className={classes.electronics_wrapper}>
      <ul>
      {electronics.map(item => 
        <ElectronicsCard 
        key={item.name}
        id={item.name}
        name={item.name} 
        description={item.description}
        price={item.price}
        />)}
      </ul>
    </Card>

    if(isError) {
        content = <h1 className={classes.alternative}>SOMETHING WENT WRONG!</h1>
    }else if(isLoading){
        content = <h1 className={classes.alternative}>LOADING...</h1>
    }

    return (
    <Fragment>
        {content}
    </Fragment>
    )
}

export default Electronics