import { useEffect } from "react"

const UsEfflyf =({toast,bisket})=>{
    
useEffect(()=>{
    console.log("Moungting Phase only");
},[])

    return (
        <div>
            <h2>toast: {toast}</h2>
            <h2>bisket: {bisket}</h2>
        </div>
    )
}
export default UsEfflyf