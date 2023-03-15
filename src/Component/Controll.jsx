import React, { useState } from "react";
function Controll() {
    let [val,setval]=useState(" ")
    let [item,setitem]=useState(" ")
    return (  
        <div className="App">
            <h1>Controlled Component</h1>
            <input type="text"   defaultValue="000" onChange={(e)=>setval(e.target.value)}/>
            {/* <input type="text"  value={item} onChange={(e)=>setitem(e.target.value)}/>s */}
            <h3>value {val}</h3>
        </div>
    );
}

export default Controll;
