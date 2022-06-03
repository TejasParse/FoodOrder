import "./MenuItem.css";
import { Container, Button } from "react-bootstrap";
import { useContext, useEffect, useState, useRef } from "react";
import cartContext from "../../context/cart/CartContext";

let MenuItem = (props) => {

    let cartValues = useContext(cartContext);
    // console.log(cartValues);


    let amtRef = useRef();

    
    let onSubmit = (event)=>{
        event.preventDefault();

        if(amtRef.current.value==0) {
            return;
        }

        cartValues.addItem({
            id: props.data.id,
            title: props.data.title,
            description: props.data.description,
            price: props.data.price,
            amount: parseInt(amtRef.current.value)
        });
    }

    console.log("hmm",cartValues.items[props.data.id]);

    let defaultAmount;

    if(cartValues.items[props.data.id]) {
        defaultAmount = cartValues.items[props.data.id].amount;
    } else {
        defaultAmount=0;
    }
    
    let imgUrl= props.data

    return (
        <Container className="row" >
            <div className="col-2">
                <img
                    src={props.data.imageUrl}
                    className="dishImage"
                />
            </div>
            <div className="col-8">
                <h3> {props.data.title} </h3>
                <p className="fst-italic mb-1"> {props.data.description}</p>
                <h4 className="price"> {`${props.data.price}/-`}</h4>
            </div>
            <form className="col-2" onSubmit={onSubmit}>
                Amount
                <input type={"number"} max={"5"} min={"0"} className="amount" defaultValue={defaultAmount} ref={amtRef} />
                <br/>
                <Button variant="primary" type="submit" className="mt-3" >Update</Button>
            </form>
            <hr />
        </Container>
    )

};

export default MenuItem;