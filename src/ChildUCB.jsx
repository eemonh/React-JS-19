import React from "react";

function ChildUCB({click}){
    console.log("Child Rendered");

    return(
        <div>
            <h2>Child</h2>
            <button onClick={click}>Child Button</button>
        </div>
    )
    
}

export default React.memo(ChildUCB);