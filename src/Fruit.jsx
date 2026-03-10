import { useState } from "react";

function Fruit(){
    const [fruit, setFruit] = useState("apple");
    const handleFruit = () => {
        setFruit("banana")
    }
    return (
        <div>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit</button>
        </div>
    )
    }


export default Fruit