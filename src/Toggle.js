 import React from 'react'; 
 function Toggle() {
       const[status , setstatus] = React.useState(true) 
         return ( 
   <div className='App'>
       {
                status?  <h1>Hello World!!!!</h1> :null
       }
      
      <button onClick={( )=>setstatus(false)}>Hide</button>
       <button onClick={( )=>setstatus(true)}>Show</button>
        <button onClick={( )=>setstatus(!status)}>Toggle</button>
     </div>
    );
 }
 export default Toggle;
