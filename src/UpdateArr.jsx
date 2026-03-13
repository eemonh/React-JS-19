import { useState } from "react";

function UpdateArr(){
const [data, setData] = useState([
    'zahir',
    'hossain',
    'eemon',
    'joker',
    'batman'
]);

const handleUser =(name)=>{
    data[data.length-1]=name
    setData([...data])
}
const handleAge =(age)=>{
    dataDetails[dataDetails.length-1].age = age;
    setDataDetails([...dataDetails])
}

const [dataDetails, setDataDetails] = useState([
    {name:"zahir", age: 22},
    {name:"hossain", age: 24},
    {name:"eemon", age: 26},
    {name:"joker", age: 28},
    {name:"batman", age: 30}
]);

    return(
        <div>
            <h1>Updating Array in State</h1>
            <input type="text" placeholder="Enter last user name" onChange={(event)=>handleUser(event.target.value)}/>
            {
                data.map((item, index)=>(
            <h2 key={index}>{item}</h2>
            ))
            }
            <hr /><br />
            <input type="text" placeholder="Enter last user age" onChange={(event)=>handleAge(event.target.value)}/>
            {
                dataDetails.map((item, index)=>(
                    <div key={index}>
                        <h2>Name: {item.name}</h2>
                        <h2>Age: {item.age}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default UpdateArr