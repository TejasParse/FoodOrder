import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import cartContext from "../../context/cart/CartContext";
import { Container } from "react-bootstrap";
import { useContext } from "react";


let CartItem = (props) => {

    let cartValues = useContext(cartContext);

    let onInc = (event)=>{
        cartValues.incrementValue(props.data.id)
    }
    let onDec = (event)=>{
        if(props.data.amount==1) {
            cartValues.removeItem(props.data.id);
            return;
        }
        cartValues.decrementValue(props.data.id);
    }

    return (
        <Container fluid className="row">
            <h3 className="col-12">{props.data.title}</h3>
            <div className="col-3">
                <h4 style={{ color: "red" }}>{`${props.data.price}/-`}</h4>
            </div>
            <div className="col-3">
                <h5>{`x${props.data.amount}`}</h5>
            </div>

            <div className="col-3 mb-1">
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button 
                        onClick={onDec} 
                        disabled={props.data.amount === 0}>-</Button> 
                        <Button 
                        onClick={onInc} 
                        disabled={props.data.amount === 5}>+</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div className="col-2 ms-4">
                <h5>{`${props.data.amount*props.data.price}/-`}</h5>
            </div>
            <hr />
        </Container>
    )

};

export default CartItem;