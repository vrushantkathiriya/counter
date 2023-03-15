import React ,{useMemo, useState} from "react";
function Hook() {
    const [count,setcount]=useState(0);
    const [item,setItem]=useState(10);

    const multiCountMemo=useMemo(function multiCount()
    {
        console.log("multiCount")
        return count*5
    },[count])
    return ( 
        <div className="App">
        <h1>UseMemo Hook in React</h1>
        <h2>Count: {count}</h2>
        <h2>Item: {item}</h2>
        <h2>{multiCountMemo}</h2>

        <button onClick={()=>setcount(count+1)}>Update Count</button>

        <button onClick={()=>setItem(item*10)}>Update Item</button>
        </div>
     );
}

export default Hook;
