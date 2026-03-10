import { useState } from "react";
import Toghos from "./Toghos";

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    return(
        <div>
            <h1>Toggle in React</h1>
            <button onClick ={()=>setToggle(!toggle)}>Toggle</button>
            {toggle ? <h1>HI!</h1> : null}
            {toggle && <p>Toggle is ON</p>}
            {!toggle ? <h1><Toghos /></h1> : null}
            {!toggle && <p>Toggle is OFF</p>}
            
        </div>
    )
}
export default Toggle