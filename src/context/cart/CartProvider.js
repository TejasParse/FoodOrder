import cartContext from "./CartContext";
import { useReducer } from "react"

const defaultCartState = {
    items: {},
    totalAmount: 0
};

const cartReducer = (state,action)=>{

    if(action.type==="ADD") {
    
        let newItems = JSON.parse(JSON.stringify(state.items));

        let updatedTotal;

        let itemId = action.item.id;
        
        if(newItems[itemId]==undefined) {

            newItems[itemId] = action.item;
            updatedTotal = state.totalAmount + (action.item.amount * action.item.price);

        } else {

            updatedTotal = state.totalAmount;
            updatedTotal -= (newItems[itemId].amount * newItems[itemId].price);
            updatedTotal += (action.item.amount * action.item.price);
    
        }

        newItems[itemId].amount = action.item.amount; 
        
        return {
            items: newItems,
            totalAmount: updatedTotal
        }
    }

    if(action.type==="INCREMENT") {

        let newItems = JSON.parse(JSON.stringify(state.items));
        let itemId = action.id;

        let updatedTotal = state.totalAmount;
        updatedTotal += newItems[itemId].price;
        newItems[itemId].amount++;
  
        
        return {
            items: newItems,
            totalAmount: updatedTotal
        }

    }

    if(action.type==="DECREMENT") {

        let newItems = JSON.parse(JSON.stringify(state.items));
        let itemId = action.id;

        let updatedTotal = state.totalAmount;
        updatedTotal -= newItems[itemId].price;
        newItems[itemId].amount--;
  
        
        return {
            items: newItems,
            totalAmount: updatedTotal
        }

    }

    if(action.type==="REMOVE") {

        let newItems = JSON.parse(JSON.stringify(state.items));
        let updatedTotal = 0;

        
        delete newItems[action.id];
        
        for(let key in newItems) {
            updatedTotal = newItems[key].amount * newItems[key].price;
        }


        return {
            items: newItems,
            totalAmount: updatedTotal
        }

    }

    return defaultCartState;
}

let CartProvider = (props)=>{

    let [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    let addCartValue = (item)=>{
        dispatchCartAction({ type: "ADD", item:item });
    };

    let removeCartValue = (id)=>{
        dispatchCartAction({ type: "REMOVE", id:id});
    };

    let incrementValue = (id)=>{
        dispatchCartAction({type: "INCREMENT", id: id});
    };
    
    let decrementValue = (id)=>{
        dispatchCartAction({type: "DECREMENT", id: id});
    }


    let cartValues = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartValue,
        removeItem: removeCartValue,
        incrementValue,
        decrementValue
    }

    return (
        <cartContext.Provider value={cartValues} >
            {props.children}
        </cartContext.Provider>
    );

};

export default CartProvider;