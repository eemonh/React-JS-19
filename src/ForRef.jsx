import { forwardRef } from 'react';

const ForRef = forwardRef((_props, ref)=>{

    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})
export default ForRef