import React , {useRef}from "react";
function Uncontroll() {
    let inputRef=useRef(null)
    let inputRef2=useRef(null)
    function submitForm(e)
    {
         e.preventDefault()
         console.log("input field 1 value : " , inputRef.current.value)
         console.log("input field 2 value : " , inputRef2.current.value)
         let input3=document.getElementById('input3').value
         console.log("input field 3 value : " , input3)
    }
    return (  
        <div className="App">
            <h1>Uncontrolled Component</h1>
           <form onSubmit={submitForm}>
           <input ref={inputRef} type="text" /> <br /><br />
            <input ref={inputRef2}type="text" /> <br /><br />
            <input id="input3"type="text" /> <br /><br />
            <button>Submit</button>
           </form>
        </div>
    );
}

export default Uncontroll;
