import { useState } from "react";
function Radio(){
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    return(
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="male" checked={gender === "male"}  />
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value="female" checked={gender === "female"} />
            <label htmlFor="female">Female</label>
            <h3>Selected Gender: {gender}</h3>
            <br /><br />
            <h2>Selected City</h2>
            <h3>Select City</h3>
            <select onChange={(event)=>setCity(event.targer.value)} defaultValue={""} >
                <option value="DHK">Dhaka</option>
                <option value="CHT">Chottogram</option>
                <option value="KHL">Khulna</option>
            </select>
            <h2>Selected City: {city}</h2>
        </div>
    )
}
export default Radio