import { useId } from "react"
function UseId() {
    const name = useId();
    const password = useId();
    const terms = useId();
    const skills = useId();


    return (
        <div>
            <h1>useId hook in React</h1>
            <form action="">
                <label htmlFor={name}>Enter user Name</label>
                <input type="text" id={name} placeholder="enter name" />
                <br /><br />
                <label htmlFor={password}>Enter password</label>
                <input type="password" id={password} placeholder="enter password" />
                <br /><br />
                <label htmlFor={terms}>Accept terms and conditions</label>
                <input type="checkbox" id={terms} />
                <br /><br />
                <label htmlFor={skills}>Select your skills</label>
                <select id={skills}>
                    <option value="php">PHP</option>
                    <option value="js">JS</option>
                    <option value="java">JAVA</option>
                    <option value="node">NODE</option>
                </select>
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UseId