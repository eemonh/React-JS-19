import { useFormStatus } from "react-dom"
function Customerform(){
    const {pending} = useFormStatus();
  return(
    <div>
          <input type="text" placeholder="enter name"/>
          <br /><br />
          <input type="password" placeholder="enter password"/>
          <br /><br />
          <button disabled={pending}>{pending ? "Submiting..." : "Submit"}</button>
          
    </div>
  )
}
export default Customerform