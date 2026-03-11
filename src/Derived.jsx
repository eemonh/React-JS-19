import { useState } from "react"
function Derived(){
const [users, setUsers] = useState([]);
const [user, setUser] = useState('');
const handleAddUsers = () => setUsers([...users, user]);
const total = users.length;
const last = users[users.length - 1];
const unique = [...new Set(users)].length;
    return(
        <div>
            <h1>Derived Component</h1>
            <br />
            <h2>Total Users: {total}</h2>
            <h2>Last User: {last}</h2>
            <h2>Unique Total Users:{unique} </h2>

            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="sdd new user" />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item, index)=>(<h2 key={index}>{item}</h2>))
            }
        </div>
    )
}

export default Derived