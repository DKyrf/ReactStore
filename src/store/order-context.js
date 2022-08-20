import React from "react";

const OrderContext = React.createContext({
    items: [],
    addItem: (item) => {},
    deleteItem: (id) => {},
    totalAmount: 0,
    resetHandler: () => {},
});

export default OrderContext