import { useState } from "react";

function MultiCon() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Count</button>
            {
                count == 0 ? <p1> Condition 0</p1>
                : count == 1 ? <p1> Condition 1</p1>
                : count == 2 ? <p1> Condition 2</p1>
                : count == 3 ? <p1> Condition 3</p1>
                : count == 4 ? <p1> Condition 4</p1>
                : count == 5 ? <p1> Condition 5</p1>
                : count == 6 ? <p1> Condition 6</p1>
                : count == 7 ? <p1> Condition 7</p1>
                : count == 8 ? <p1> Condition 8</p1>
                : count == 9 ? <p1> Condition 9</p1>
                : count == 10 ? <p1> Condition 10</p1>
                : <p1>Other Condition</p1>
            }
        </div>
    );
}

export default MultiCon