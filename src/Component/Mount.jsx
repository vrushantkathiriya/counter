//componentDidMount life cycle method in ReactJs
//import './App.css';
import React from 'react';
class Mount extends React.Component{
   constructor()
   {
    super();
    this.state={
      name:"vrushant"
    }
    
   }
   componentDidMount()
   {
    console.log("ComponentDidMount")
   }

  render()
    {

      console.log("render")

      return ( 
        <div className = "App">
           <h1>Component Did Mount { this.state.name}</h1>
           <button onClick={()=>{this.setState({name:"Bittu"})}}>Update Name</button>
        </div>
    );
    }
  }

  export default Mount