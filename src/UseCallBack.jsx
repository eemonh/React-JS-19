import { useState, useCallback } from "react";

function UseCallBack() {
    const [count, setCount] = useState(0);

    const increment = useCallback(()=> {
        setCount((prev) => prev + 1);
    }, []);

    return(
        <div>
            <h2>UseCallBack Example</h2>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )}

export default UseCallBack