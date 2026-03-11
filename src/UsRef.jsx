import { useRef } from "react";

function UsRef(){

const inputRef = useRef(null);
const h1Ref = useRef(null);
const inputHandler =() =>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.borderColor = "red";
    inputRef.current.style.borderWidth = "6px";
    inputRef.current.placeholder = "Enter Password";
    inputRef.current.value = '123'
}

const toggleHandler = () =>{
    

if( inputRef.current.style.display!='none'){
    inputRef.current.style.display='none'
}else{
    inputRef.current.style.display='inline'}

}
const h1handler =() =>{
    h1Ref.current.style.color = 'red'
}
    return(
        <div>
            <h1>useRef</h1>
            <button onClick={toggleHandler}>Hide</button>
            <input ref={inputRef} type="text" placeholder="Enter user name"/>
            <button onClick={inputHandler}>Focus on input field</button>
            <h1 ref={h1Ref}>Hello user</h1>
            <button onClick={h1handler}>Handler</button>
        </div>
    )
}

export default UsRef