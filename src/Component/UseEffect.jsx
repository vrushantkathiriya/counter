import React , {useEffect,useState} from "react";
function UseEffect() {
    const [data, setData]=useState(10)
    const[count,setCount]=useState(0)
    useEffect(()=>{
        //console.log("useEffect")
    //   alert("useEffect")
    console.warn("called with data state")
    }, [data])
    return ( 
        <div className="App">
            <h1>Count : {count}</h1>
            <h1>Data : {data}</h1>

            {/* <h1>UseEffect in React {count}</h1> */}
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
     );
}

export default UseEffect;