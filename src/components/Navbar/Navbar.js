import { useContext } from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import "./Navbar.css"
import cartContext from "../../context/cart/CartContext";

const AppNavbar  = (props)=>{

    let cartValues = useContext(cartContext);
    let count=0;

    for( let key in cartValues.items) {
        count+= cartValues.items[key].amount;
    }

    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={require("../../tomato_logo.png")}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt="React Bootstrap logo"
                    />
                    <h3 className="title" >Tomato</h3>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Button className="rounded-pill ps-5 pe-5 pt-2 pb-2 text-white" id="CartContainer" variant="light" onClick={props.cartClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className="ms-2 me-2">
                                Cart
                            </span>
                            <Badge bg="danger">{count}</Badge>
                    
                    </Button>
                </Nav>
            </Container>
        </Navbar>

    );

}

export default AppNavbar;