import React, { useContext, useState } from "react";
import ReactDOM from "react-dom" 
import { Modal, Button } from "react-bootstrap";
import cartContext from "../../context/cart/CartContext";
import CartItem from "./CartItem"

let Modal1 = (props) => {

    let cartValue = useContext(cartContext);
    let ITEMS = [];
    for(let key in cartValue.items) {
        ITEMS.push(cartValue.items[key]);
    }

    console.log(ITEMS);

    return (

        <React.Fragment>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {ITEMS.map(element=>{
                        return <CartItem data={element}></CartItem>
                    })}

                    <div className="row">
                        <div className="col-9">
                            <h3>Total Amount</h3>
                        </div>
                        <div className="col-3">
                            <h4>{`${cartValue.totalAmount}/-`}</h4>
                        </div>
                    </div>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    <Button variant="primary">Order</Button>
                </Modal.Footer>

            </Modal>
        </React.Fragment>

    )
};

let CartModal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Modal1 show={props.show} handleClose={props.handleClose} ></Modal1>, document.getElementById("overlays"))}
        </React.Fragment>
    )

};

export default CartModal;