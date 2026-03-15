import { useState } from "react";
import { useMemo } from "react";
function WithUseMemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculaton = (num) => {
        console.log('Running expensive claculation...');
        let total = 0;
        for (let i = 0; i < 1000000000; i++) {
            total += 1;
        }
        return total + num;
    };

    const result = useMemo(() => expensiveCalculaton(count), [count]);
        return(
            <div>
                <h2>With useMemo</h2>
                <h2>Result : {result}</h2>
                <button onClick={()=>setCount(count + 1)}>Increase Count</button>
                <input type="text" value={text} onChange={(event)=>setText(event.target.value)} />
                <p>Count : {count}</p>
            </div>
        )
    }

export default WithUseMemo