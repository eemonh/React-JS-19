import { useState, useEffect } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(0);
    
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return (
        <div>
            
            <h1
            style= {{
                color: color,
                border: "1px solid red",
                backgroundColor: "gray",
                padding: "10px",
                margin: "10px",
                width: "400px",
                borderRadius: "10px"
            }}
            >{time}</h1>
        </div>
    )
}

export default Clock