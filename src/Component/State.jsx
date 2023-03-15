import React from "react";
import {useState} from 'react'     //  data change krva mate 

function State() {
    let [data , setData]=useState("vrushant")    //data change krva mate//
    // let [data , setData]=useState(0)     //   number ne + krva mate

    function updateData()
    {
        // data = "Bittu";           // alert ma data show karava mate
        // alert(data)

        // setData("Bittu")      // data change krva mate
        setData(data+1)          //   number ne + krva mate
    }
    return ( 
        <div className="State">
        <h1>{data}</h1>
        <button onClick={updateData}>Update Data</button>
        </div>

     );
}

export default State;