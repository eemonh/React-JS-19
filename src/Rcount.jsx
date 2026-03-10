import { useState } from "react";

const Rcount = () =>{
    const [rCount, setRcount] = useState(100)
    return (
        <div>
            <h1>Reverse Count :{rCount}</h1>
            <button onClick={()=>setRcount(rCount-1)}>Reverse Count</button>
        </div>
    )

}
export default Rcount;



