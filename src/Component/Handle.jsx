 
import {useState} from "react";
//import './App.css';
function Handle() {
  const [name,setname]=useState("");
  const [tnc,setTnc]=useState("false");
  const [interest,setinterest]=useState("");
  function getFormData(e)
  { 
       console.log(name,tnc,interest)
       e.preyentDefault()
  }
  return ( 
    <div className="App">
      <h1>Handle Form in React</h1> 
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)} /> <br /><br />
        <select onChange={(e)=>setinterest(e.target.value)}>
          <option>Select option </option> 
          <option>Marvel </option>
          <option>Dc</option>
        </select> <br /><br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span> <br /><br />
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
   );
}
export default Handle;