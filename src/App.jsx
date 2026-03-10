import Fruits from "./Fruits.jsx";
import { Colors } from "./Fruits.jsx";
import Apps from "./Apps.jsx";
import Fruit from "./Fruit.jsx";
import Counter from "./Counter.jsx";
import Rcount from "./Rcount.jsx";
import Toggle from "./Toggle.jsx";
import MultiCon from "./MultiCon.jsx";
import Props0 from "./Props0.jsx";
import Props1 from "./Props1.jsx";
import InputF from "./InputF.jsx";
import CntrlCmpnt from "./CntrlCmpnt.jsx";
import Checkbox from "./Checkbox.jsx";
import Radio from "./Radio.jsx";
import Loops from "./Loops.jsx";
import ReLoops from "./ReLoops.jsx";
import Clock from "./Clock.jsx";
import { useState } from "react";
import NesLoop from "./NesLoop.jsx";
import UsEff from "./UsEff.jsx";
import UsEffa from "./UsEffa.jsx";
import LyfCyl from "./LyfCyl.jsx";
import catImage from "./assets/538-5383561_good-morning-funny-cat-png-download-business-cat.png";
import warCat from "./assets/warCat.png";
import squid from "./assets/squidward.png";
import './css/style.css'


function App() {
  const [color, setColor] = useState("red");
  const [usfa, setUsfa] = useState(0);
  const [usfb, setUsfb] = useState(0);
  const cardStyle = {
    border: "1px solid red",
    padding: "10px",
    margin: "10px",
    width: "400px",
    borderRadius: "10px",
  };

  const [cardStyleDyna, setCardStyleDyna] = useState({
    border: "1px solid red",
    padding: "10px",
    margin: "10px",
    width: "200px",
    borderRadius: "10px",
  });

  const updateTheme = (bgColor, textColor) => {
    setCardStyleDyna({
      ...cardStyleDyna,
      backgroundColor: bgColor,
      color: textColor,
    });
  };

  const [grid, setGrid] = useState(true)

  return (
    <div>
      <Fruits />
      <Colors />
      <br />
      <Apps />
      <hr />
      <Fruit />
      <hr />
      <br />
      <Counter />
      <hr />
      <br />
      <Rcount />
      <hr />
      <br />
      <Toggle />
      <hr />
      <br />
      <MultiCon />
      <hr />
      <br />
      <Props0 />
      <hr />
      <br />
      <Props1 />
      <hr />
      <br />
      <InputF />
      <hr />
      <br />
      <CntrlCmpnt />
      <hr />
      <br />
      <Checkbox />
      <hr />
      <br />
      <Radio />
      <hr />
      <br />
      <Loops />
      <hr />
      <br />
      <ReLoops />
      <hr />
      <br />
      <h1>Digital Clock in React JS</h1>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"blue"}>Blue</option>
        <option value={"orenge"}>Orenge</option>
      </select>
      <Clock color={color} />
      <hr />
      <br />
      <NesLoop />
      <hr />
      <br />
      <UsEff />
      <hr />
      <br />
      <h1>Handle Props side Effect with useEffect in component</h1>
      <UsEffa usfa={usfa} usfb={usfb} />
      <button onClick={() => setUsfa(usfa + 1)}>UseEffect A</button>
      <button onClick={() => setUsfb(usfb + 1)}>UseEffect B</button>
      <hr />
      <br />
      <h1>useEffect Hooks for Life Cycle Methods in React JS</h1>
      <LyfCyl />
      <hr />
      <br />
      <>
        <h1 style={{ color: "red" }}>Inline Style in React JS</h1>
        <div style={{ display: "flex" }}>
          <div style={cardStyle}>
            <img
              style={{ width: "400px", height: "400px" }}
              src={catImage}
              alt="meow"
            />
            <div
              style={{
                padding: "10px",
                margin: "10px",
              }}
            >
              <h4>I am a cat</h4>
              <p>meow meow</p>
            </div>
          </div>
          <div style={cardStyle}>
            <img
              style={{ width: "400px", height: "400px" }}
              src={warCat}
              alt="meowwww"
            />
            <div
              style={{
                padding: "10px",
                margin: "10px",
              }}
            >
              <h4>I am another cat</h4>
              <p>MEOWWW</p>
            </div>
          </div>
        </div>
      </>
      <hr />
      <br />

      <>
        <h1 style={{ color: "blue" }}>Dynamic and Conditional Inline Style</h1>
        <button onClick={() => updateTheme("gray", "violet")}>
          Gray theme
        </button>
        <button onClick={() => updateTheme("black", "white")}>
          Default theme
        </button>
        <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
        <div style={{ display: grid? 'flex':'block', flexWrap: "wrap" }}>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
          <div style={cardStyleDyna}>
            <img style={{ width: "200px" }} src={squid} alt="squid" />
            <div style={{ padding: "10px", margin: "10px" }}>
              <h4>I am a squid</h4>
              <p>squid squid</p>
            </div>
          </div>
        </div>
      </>
      <hr />
      <br />
      <h1 className="heading">External Style</h1>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
