import { useState } from "react";
function UsTran() {

const [pending,setPending] = useState(false);
const handleButton = async () => {
    setPending(true);
   await new Promise(res=>setTimeout(res,2000))

   setPending(false);

}

    return(
        <div>
            <h1>useTransition Hook using useState</h1>
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}

export default UsTran;