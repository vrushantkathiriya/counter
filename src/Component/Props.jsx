// Pass Function as Props
import User from './Members';
import Members from './User';
import React from "react";
//import './App.css';
function Props() {
  function getData()
  {
    alert("Hello from app")
  }
  return ( 
    <div className="App">
      <User data={getData} />

      <div style={{float:'right'}}>
        <Members  data={getData}/>
      </div>
    </div>
   );
}
export default Props;

