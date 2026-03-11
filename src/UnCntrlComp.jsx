import { useRef } from "react";
function UnCnrltComp() {

    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const handleForm =(event) => {
        event.preventDefault();
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        console.log(user, password);
    }

    const handleFormRef = (event) => {
        event.preventDefault();
     const user=userRef.current.value;
     const password=passwordRef.current.value;
        console.log(handleFormRef,user, password);
    }
    return (
        <div>
            <h1>Uncontrolled Component</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input id="user" type="text" placeholder="Enter user name"/>
                <br /> <br />
                <input id="password" type="password" placeholder="Enter password"/>
                <br /><br />
                <button>Submit</button>
            </form>
            <hr />
            <h1>Uncontrolled Component with useRef</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <input ref={userRef} type="text" placeholder="Enter user name"/>
                <br /> <br />
                <input  ref={passwordRef} type="password" placeholder="Enter password"/>
                <br /><br />
                <button>Submit with Ref</button>
            </form>
        </div>
    )
}
export default UnCnrltComp