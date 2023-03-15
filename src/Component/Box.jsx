 import {useState} from 'react';
function Abc () {
 const[data,setdata]=useState(null)
 const[Print,setprint]=useState(false)

   function getData(val)
   {
    console.log(val.target.value)
    setdata(val.target.value)
    setprint(false)
  }
  return (
    <div className="App">
      {
        Print?
        <h1> {data}</h1>
        :null
      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setprint(true)}>print Data</button>
    </div>
    );
}

export default Abc;


