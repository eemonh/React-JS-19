import Fruits from './Fruits.jsx'
import { Colors } from './Fruits.jsx'
import Apps from './Apps.jsx'
import Fruit from './Fruit.jsx'
import Counter from './Counter.jsx'
import Rcount from './Rcount.jsx'
import Toggle from './Toggle.jsx'
import MultiCon from './MultiCon.jsx'
import Props0 from './Props0.jsx'
import Props1 from './Props1.jsx'
import InputF from './InputF.jsx'
import CntrlCmpnt from './CntrlCmpnt.jsx'
import Checkbox from './Checkbox.jsx'
import Radio from './Radio.jsx'
import Loops from './Loops.jsx'
import ReLoops from './ReLoops.jsx'
import Clock from './Clock.jsx'
import { useState } from 'react'
import NesLoop from './NesLoop.jsx'
import UsEff from './UsEff.jsx'
import UsEffa from './UsEffa.jsx'
import LyfCyl from './LyfCyl.jsx'

function App() {
  const [color, setColor] = useState("red");
  const [usfa, setUsfa] = useState(0);
  const [usfb, setUsfb] = useState(0);
    
  return (
    <div>
        <Fruits />
        <Colors />
        <br />
        <Apps />
        <hr />
        <Fruit />
        <hr /><br />
        <Counter/>
        <hr /><br />
        <Rcount/>
        <hr /><br />
        <Toggle />
        <hr /><br />
        <MultiCon />
        <hr /><br />
        <Props0 />
        <hr /><br />
        <Props1 />
        <hr /><br />
        <InputF />
        <hr /><br />
        <CntrlCmpnt />
        <hr /><br />
        <Checkbox />
        <hr /><br />
        <Radio />
        <hr /><br />
        <Loops />
        <hr /><br />
        <ReLoops />
        <hr /><br />
        <h1>Digital Clock in React JS</h1>
        <select onChange={(event)=> setColor(event.target.value)}>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"orenge"}>Orenge</option>
        </select>
        <Clock color={color}/>
        <hr /><br />
        <NesLoop />
        <hr /><br />
        <UsEff />
        <hr /><br />
        <h1>Handle Props side Effect with useEffect in component</h1>
        <UsEffa usfa={usfa} usfb={usfb}/>
        <button onClick={()=>setUsfa(usfa + 1)}>UseEffect A</button>
        <button onClick={()=>setUsfb(usfb + 1)}>UseEffect B</button>
        <hr /><br />
        <h1>useEffect Hooks for Life Cycle Methods in React JS</h1>
        <LyfCyl />
        <hr /><br />

    </div>
    

     
  )
}

export default App