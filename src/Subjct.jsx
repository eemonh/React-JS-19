import React, { useContext } from "react";
import { SubjectContext } from "./ContextApi";
export default function Subjct() {
const subjct = useContext(SubjectContext)
    return (
        <div style={{backgroundColor: 'red', padding: 10}}>
            <h1>Subject is : {subjct}</h1>
            
        </div>
    );
    
}