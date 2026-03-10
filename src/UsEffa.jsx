import { useEffect } from "react";
const UsEffa =({usfa, usfb})=>{

    const handleUseEffectA=()=>{
        console.log("handleCounterA called A");
    };

    const handleUseEffectB=()=>{
        console.log("handleCounterB called B");
    };

    useEffect(()=>{
        handleUseEffectA();
    }, [])

    useEffect(()=>{
        handleUseEffectB();
    },[usfb])
    
    // useEffect(()=>{
    //     handleUseEffectB();
    // },[usfa,usfb]) //for calling both
    
    return(
        <div>
            <h2>UseEffect A Value {usfa} for only once</h2>
            <h2>UseEffect B Value {usfb} for every time</h2>
        </div>
    )
}
export default UsEffa