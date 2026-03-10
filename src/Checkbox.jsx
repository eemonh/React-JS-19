import { useState } from "react"

function Checkbox(){
    const [skills, setSkills] = useState([]);
    const handleSkills =(event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
        setSkills([...skills, event.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h1>Checkbox</h1>
            <h3>Select your skills</h3>
            <br />
            <input type="checkbox" onChange={handleSkills} id= "php" value= "php"/>
            <label htmlFor="php">PHP</label>
                <br />
            <input type="checkbox" onChange={handleSkills} id= "js" value= "js"/>
            <label htmlFor="js">JS</label>
                <br />
            <input type="checkbox" onChange={handleSkills} id= "java" value= "java"/>
            <label htmlFor="java">JAVA</label>
                <br />
            <input type="checkbox" onChange={handleSkills} id= "node" value= "node"/>
            <label htmlFor="node">NODE</label>
                <br />
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Checkbox