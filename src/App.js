import React, { useState } from "react";
import './App.css';

function App() {

  const [result, setResult] = useState();
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  
  // function for button click
  const click = (e) => {
    setText(text + e.target.value);
  }

  // function for calculation
  const calculate = () => {
    setShow(true);
    if (text.length < 1) {
      setResult("Error");
    } else {
      setResult(eval(text).toString());
    }
  }

  // function for clear all the inputs
  const clear = () => {
    setShow(false);
    setResult("");
    setText("");
  }


  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type='text' value={text} />
      <br/>
      {show?(<div>{result}</div>):<></>}
      <br/>
      <div>
        <div>
          <button className="button" value="7" onClick={click}>7</button>
          <button className="button" value="8" onClick={click}>8</button>
          <button className="button" value="9" onClick={click}>9</button>
          <button className="button" value="+" onClick={click}>+</button>
        </div>
        <div>
          <button className="button" value="4" onClick={click}>4</button>
          <button className="button" value="5" onClick={click}>5</button>
          <button className="button" value="6" onClick={click}>6</button>
          <button className="button" value="-" onClick={click}>-</button>
        </div>
        <div>
          <button className="button" value="1" onClick={click}>1</button>
          <button className="button" value="2" onClick={click}>2</button>
          <button className="button" value="3" onClick={click}>3</button>
          <button className="button" value="*" onClick={click}>*</button>
        </div>
        <div>
          <button className="button" onClick={clear}>c</button>
          <button className="button" value="0" onClick={click}>0</button>
          <button className="button" onClick={calculate} >=</button>
          <button className="button" value="/" onClick={click}>/</button>
        </div>
      </div>

    </div>
  );
}

export default App;
