import React, { useState } from 'react'
import './index.css';
const App = () => {
  const[result,setResult]=useState("");

  const handle=(e)=>{
    setResult(result.concat(e.target.name));
    
  }
  const clear=()=>{
    setResult("");
  }
  const back=()=>{
    setResult(result.slice(0,result.length-1));  //result.length-1 => -1
  }
  const cals=()=>{
    setResult(eval(result));  //result.length-1 => -1
  }
  
  return (
    <div className='container'>
      <form className='result' >
      <label htmlFor="result"></label>
        <input type='text' id='result' title="Input field for result" value={result} onChange={handle}/>
      </form>
      <div className='buttons'>
        <button className='item item1 clear' onClick={clear}>AC</button>
        <button className='item item1 delete' onClick={back}>DEL</button>
       
        <button className='item item3 sign' name='/' onClick={handle}>&divide;</button>
        <button className='item numbers' name='7' onClick={handle}>7</button>
        <button className='item numbers' name='8' onClick={handle}>8</button>
        <button className='item numbers' name="9" onClick={handle}>9</button>
        <button className='item item3 sign' name="*" onClick={handle}>&times;</button>
        <button className='item numbers' name="4" onClick={handle}>4</button>
        <button className='item numbers' name="5" onClick={handle}>5</button>
        <button className='item numbers' name="6" onClick={handle}>6</button>
        <button className='item item3 sign' name="-" onClick={handle}>&ndash;</button>
        <button className='item numbers' name="1" onClick={handle}>1</button>
        <button className='item numbers' name="2" onClick={handle}>2</button>
        <button className='item numbers' name="3" onClick={handle}>3</button>
        <button className='item item3 sign' name="+" onClick={handle}>+</button>
        <button className='item itemzero numbers' name="0" onClick={handle}>0</button>
        <button className='item dot' name="." onClick={handle}>.</button>
        <button className='item item3 equal'onClick={cals}>=</button>


      </div>
      
    </div>
  )
}

export default App
