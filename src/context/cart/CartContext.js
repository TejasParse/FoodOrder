import { createContext } from "react";

let cartContext = createContext({
    items: {},
    totalAmount: 0,
    addItem: ()=>{},
    removeItem: ()=>{},
    incrementValue: ()=>{},
    decrementValue: ()=>{}
});

export default cartContext;