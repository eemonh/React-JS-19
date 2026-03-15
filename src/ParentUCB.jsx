import { useState, useCallback } from "react";
import ChildUCB from "./ChildUCB";

function ParentUCB() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(()=> {
        console.log("Button Clicked");
        
    }, []);

    return(
        <div>
            <h2>Parent</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Parent Button</button>
            <ChildUCB click={handleClick} />
        </div>
    )}

export default ParentUCB