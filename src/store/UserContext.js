import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "./user-context";
import OrderContext from "./order-context";



const UserProvider = (props) => {
    const orderCTX = useContext(OrderContext);
    const {isError, isLoading, fetchData} = useFetch();

    const orderHandler = (user) =>  {
        const config = {
            url:"https://reactapp-6881c-default-rtdb.firebaseio.com/orders.json",
            body: {
                id: `${Math.random()}_${user.id}`,
                user,
                items: orderCTX.items
            },
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
        };

        fetchData(config, (data => {
            console.log(data);
        }))

    };

    const defaultValue = {
        users: [],
        createOrder: orderHandler,
        error: isError,
        loading: isLoading,
    };

    return (
        <UserContext.Provider value={defaultValue}>
            {props.children}
        </UserContext.Provider>
    )
};

export default UserProvider