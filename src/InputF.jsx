import { useState } from "react";
function InputF(){
    const [val, setVal] = useState("");
    return(
        <div>
            <h1>Input Field</h1>
            <input type="text" value= {val} onChange={(event)=>setVal(event.target.value)} onBlur={(event)=>alert(event.target.value)} placeholder="Enter User Name" />
            <h2>{val}</h2>
            <button onClick={()=>setVal("")}>Clear Value</button>
        </div>
    )
}
export default InputF