
import { useEffect } from "react";
import { useState } from "react";
function UsEff() {

    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        //callOnce();
        counterFunction();
    }, [counter, data]);


    function counterFunction() {
        console.log("counter function called", counter);
    }

    function callOnce() {
        console.log("callOnce function called");
    }


    return (
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter{counter}</button>
            <button onClick={() => setData(data + 1)}>Data{data}</button>


           <h1>useEffect Examples</h1>
            <pre style={{ fontSize: "14px", lineHeight: "1.8" }}>
{`1) useEffect(() => {
      //call every time
   })

2) useEffect(() => {
      //call only once
   }, [])

3) useEffect(() => {
      //call on changing single state
   }, [State1])

4) useEffect(() => {
      //call on changing both states
   }, [State1, State2])

5) useEffect(() => {
      //call on changing multiple states
   }, [State1, State2, State3])

6) useEffect(() => {
      //call on changing props
   }, [Props1, Props2])`}
            </pre>
        </div>
    );
}

export default UsEff;