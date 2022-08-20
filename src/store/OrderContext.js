import React, {useReducer} from "react";
import OrderContext from "./order-context";

const defaultReducerValue = {
    items: [],
    totalAmount: 0,
};



const cartReducer = (prevState, action) => {

    if(action.type === "ADD_ITEM"){
        console.log("AD");
        const updatedAmount = prevState.totalAmount + action.val.price * action.val.amount;
        const existedItemIndex = prevState.items.findIndex(order => order.id === action.val.id);
        const existingItem = prevState.items[existedItemIndex];

        let updatedArray;

        if(existingItem){
            const newEntry = {
                ...existingItem,
                amount: Number(existingItem.amount) + Number(action.val.amount),
                totalPrice: existingItem.totalPrice + existingItem.price,
            };
            updatedArray = [...prevState.items];
            updatedArray[existedItemIndex] = newEntry;

        }else{
            updatedArray = prevState.items.concat(action.val);
        };

        return {
            items: updatedArray,
            totalAmount: updatedAmount,
        }
    };

    if(action.type === "REMOVE_ITEM"){
        console.log("DEL");
        const existionItemIndex = prevState.items.findIndex(order => order.id === action.id);
        const existingItem = prevState.items[existionItemIndex];

        const updatedAmount = Number(prevState.totalAmount) - Number(existingItem.price);
        
        let updatedArray 
        if(Number(existingItem.amount) === 1){
          const updatedItems = [...prevState.items];
          updatedArray = updatedItems.filter(order => order.id !== action.id);
          console.log(updatedArray);
        }else{

          const newEntry = {
            ...existingItem,
            amount: existingItem.amount - 1,
            totalPrice: existingItem.totalPrice - existingItem.price,
          };

          const updatedItems = [...prevState.items];
          updatedItems[existionItemIndex] = newEntry;
          updatedArray = updatedItems;

        }

        return {
          items: updatedArray,
          totalAmount: updatedAmount,
      }

    };

    if(action.type === "RESET"){
      return {
        items: [],
        totalAmount: 0,
      }
    }

    return defaultReducerValue
}


const OrderProvider = (props) => {

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultReducerValue)


  const addItemHandler = (item) => {
    dispatchCart({type: "ADD_ITEM", val: item})
  };

  const deleteItemHandler = (id) => {
    dispatchCart({type: "REMOVE_ITEM", id: id})
  };

  const resetHandler = () => {
    dispatchCart({type: "RESET"})
  }

  const defaultValue = {
    items: cartState.items,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    totalAmount: cartState.totalAmount,
    resetHandler
  };


    
    return (
        <OrderContext.Provider value={defaultValue}>
          {props.children}
        </OrderContext.Provider>
    )
};

export default OrderProvider;