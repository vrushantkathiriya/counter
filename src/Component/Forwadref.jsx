import React , {useRef}from "react";
import '../App.css'
import Chaild from "./Chaild";
function Forwad() {
    let inputRef=useRef(null);
    function updateInput()
    {
        inputRef.current.value="1000"
        inputRef.current.style.color="red"
        inputRef.current.focus()
    }
    return (
        <div className="App">
            <h1> forwardRef in React</h1>
            <Chaild  ref={inputRef}/>
            <button onClick={updateInput}>Update Inputbox</button>
        </div>
      );
}

export default Forwad;