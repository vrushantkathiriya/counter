import React, {useRef,useState } from "react";
// import '../App.css';s
function Hoc() {
    return ( 
        <div className="App">
            <h1>Hoc</h1>
            <HOCred cmp={Counter}/>
            <HOCgreen cmp={Counter}/>
            <HOCblue cmp={Counter}/>
        </div>
     );
}
function HOCred(props)
{
    return <h2 style={{backgroundColor:'red',width:200 , height:100}}> <props.cmp/></h2>  
}

function HOCgreen(props)
{
    return <h2 style={{backgroundColor:'green',width:200 , height:100}}>  <props.cmp/></h2>
}

function HOCblue(props)
{
    return <h2 style={{backgroundColor:'blue',width:200 , height:100}}>  <props.cmp/></h2>
}


function Counter()
{    
    const [count,setCount] = useState(0)
    return<div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
}

export default Hoc;