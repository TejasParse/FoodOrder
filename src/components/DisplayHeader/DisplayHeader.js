import { Container } from "react-bootstrap";
import "./DisplayHeader.css"

const DisplayHeader = ()=>{
    return (
        <Container fluid className="d-flex bg-dark text-white pt-5 pb-5 mainContainer">
            <Container className="rounded shadow bg-white text-dark mt-5 mb-5 p-2 text-center" id="about">
                <h2>Welcome to Absolute Barbeque</h2>
                <p>
                volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor
                </p>
            </Container>
        </Container>
    )
};

export default DisplayHeader;