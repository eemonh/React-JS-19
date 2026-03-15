import { useState, useMemo } from "react";
import Child from "./Child";

function Parent() {
    const [count, setCount] = useState(0);

    const user = useMemo(()=> ({name: 'John', age: 30}), []);
    console.log("parent rendered");
    
    return (
        <div>
            <h1>useMemo example</h1>
            <h2>Parent</h2>
            <h2>Parent Count : {count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase Count</button>
            <Child user={user} />
        </div>
    );
}

export default Parent;