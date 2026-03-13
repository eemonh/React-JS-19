import { useState } from "react";

function UpdatingUseState() {
    const [names, setNames] = useState(["Zahir"]);
 return (
     <div>
         <h1>Updating using useState</h1>
         <h2>{names}</h2>
         <button onClick={()=>setNames('zahir hossain')}>Update Namae</button>
     </div>
 )   
}
export default UpdatingUseState