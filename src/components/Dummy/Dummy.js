import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

let Dummy = ()=>{

    
    let [amt,setAmt] = useState(0);
    
    let onClick = ()=>{
        setAmt(prev=>prev+1);
    }
    
    useEffect(()=>{
        console.log("Dummy");

    },[amt]);

    return (
        <Button onClick={onClick}>
            {amt}
        </Button>
    )
};

export default Dummy;