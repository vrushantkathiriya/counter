
import React from "react";
import Render from './Render';

function Lifecycle() {
  const[name,setname]=React.useState("vrushant")
  return ( 
        <div>
          <h1>Render Method in React</h1>
          <Render name={name} />
          <button onClick={()=>setname("vrushant")}>Update Name</button>
        </div>
    );
}

export default Lifecycle