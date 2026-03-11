import {useState} from "react";

function UpObj() {
    const [data,setData]=useState({name:"Tiger", address: {city:"Dhaka", country:"Bangladesh"}});
    const handleName=(val)=>{
        data.name=val
        setData({...data})
    }
    const handlecity=(city)=>{
        data.address.city=city
        setData({...data,address:{...data.address,city}})
    }
    return (
        <div>
            <h1>Update Object in State</h1>
           <input type="text" placeholder="Update Name" onChange={(event)=>handleName(event.target.value)}/>
           <input type="text" placeholder="Update city" onChange={(event)=>handlecity(event.target.value)}/>
            <h2>name: {data.name}</h2>

            <h2>city: {data.address.city}</h2>
            <h2>country: {data.address.country}</h2>
        </div>
    )}
    export default UpObj