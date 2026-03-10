import PropsAdd from "./PropsAdd.jsx";
import { AProp } from "./PropsAdd.jsx";
import Psycho from "./Psycho.jsx";
import Seeker from "./Seeker.jsx";
import { useState } from "react";
function Props0() {
    let name = "Zahir Hossain";
    let userObject ={
        name: "Joker",
        age: "29",
        email: "joker@test.com"
    }
    let userObject2 ={
        name: "yoyo",
        age: "26",
        email: "yoyo@test.com"
    }
    let userObject3 ={
        name: "Batman",
        age: "30",
        email: "batman@test.com"
    }
    let asylum = ['gotham', 'arkham', 'batcave', 'wayneInc'];

    const [guest, setGuest] = useState();
    return (
        <div>
            <h1>Props in React</h1>
            
            <PropsAdd name={name} age = {26} email = "2M9sV@example.com" info = {userObject} />
            <AProp info1 = {userObject2} />
            <AProp info1 = {userObject3} />
            <Psycho contained = {asylum}/>

            {guest && <Seeker name={guest} /> }
            <button onClick={()=>setGuest("Harley Q.")}>Asylum Seeker</button>
        </div>
    );
}
export default Props0;