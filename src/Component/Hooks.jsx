import React , {useState,use} from "react";
function Hooks() {
    const[data,setData]=useState("vrushant ")
    return ( 
        <div>
            {/* <h1>Hello Hooks!!!</h1> */}
            <h1>{data}</h1>
            <button onClick={()=>setData("Patel")}>Update Data</button>
        </div>
     );
}

export default Hooks;