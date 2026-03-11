import { useTransition } from "react";
function UstTrans() {
    const [pending, startTransition] = useTransition();

    const handleButton=async()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000));
        })
    }

    return (
        <div>
            <h1>UseTransition hook in React 19</h1>
            {
                pending?
                <img style={{width:'100px'}} src="https://i.sstatic.net/kOnzy.gif" alt="" />
                :null
            }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}
export default UstTrans