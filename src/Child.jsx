import React from "react";

const Child = React.memo(({ user }) => {

    console.log("Child rendered");
    
    return (
        <div>
            <h2>Child</h2>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>

        </div>
    );
})
export default Child;