import { useState } from 'react';
import './App.css';

function App() {
  //const [count, setCount] = useState(0);
  const [inpField,setInputFiels] = useState("");
  const [result,setResult] = useState('');
  const handler = (event)=>{
    //console.log(event);
    console.log(event.target.value);
    setResult(event.target.value);
  }
  const updateInputField  = (event) =>{
    console.log(event.target.value);
    if(event.target.value !== "=" && event.target.value !== "C")
      setInputFiels(prev => prev+event.target.value);
    else if(event.target.value === "=")
    {
      if(inpField.length === 0 || inpField[inpField.length-1] === "/" || inpField[inpField.length-1] === "+" ||
      inpField[inpField.length-1] === "*" || inpField[inpField.length-1] === "-"){
        setResult("Error");
      }
      else
        setResult(eval(inpField));
    }
    else{
      setInputFiels("");
      setResult("");
    }
  }
  return (
    <>
      <div>
        <h1>React Calculator</h1>
        <input type="text" onChange={handler} value={inpField}></input>
          <div>
             {result} 
          </div>
          <div className="btn">
            <button onClick={updateInputField} value="7">7</button>
            <button onClick={updateInputField}  value="8">8</button>
            <button onClick={updateInputField}  value="9">9</button>
            <button onClick={updateInputField}  value="+">+</button>
          </div>
          <div className="btn">
            <button onClick={updateInputField}  value="4">4</button>
            <button onClick={updateInputField}  value="5">5</button>
            <button onClick={updateInputField}  value="6">6</button>
            <button onClick={updateInputField}  value="-">-</button>
          </div>
          <div className="btn">
            <button onClick={updateInputField}  value="1">1</button>
            <button onClick={updateInputField}  value="2">2</button>
            <button onClick={updateInputField}  value="3">3</button>
            <button onClick={updateInputField}  value="*">*</button>
          </div>
          <div className="btn">
            <button onClick={updateInputField}  value="C">C</button>
            <button onClick={updateInputField}  value="0">0</button>
            <button onClick={updateInputField}  value="=">=</button>
            <button onClick={updateInputField}  value="/">/</button>
          </div>
      </div>
    </>
  )
}

export default App;
