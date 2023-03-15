import React, {useCallback, useState} from "react";

function Counter() {
 const [count, setCount] = useState(0)
    return ( 
        <div className="counter" style={{
            textAlign: "center",
            fontSize:'20px',
           color:'orange',
           fontFamily:'cursive',
           padding: '5em 0em'
        }}>
           <h1>The count is <br />{count}</h1> 
            
            <div className="btn" style={{
                padding: '1em 0em',

            }}>
            <button style={{
                background: 'black',
                margin: '0px 10px',
                cursor: 'pointer',
                color: 'white',
                padding: '0em 2em',
                fontSize: '14px'
                
            }} onClick={() =>setCount(count - 1)}>Decrement</button>
            <button
            style={{
                background: 'black',
                margin: '0px 10px',
                cursor: 'pointer',
                color: 'white',
                padding: '0em 2em',
                fontSize: '14px'
             }} onClick={() =>setCount(count + 1)}>Increment</button>
            </div>
        </div>
     );
}

export default Counter;