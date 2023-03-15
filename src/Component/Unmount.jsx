import React from "react"
import Render from "./Render";
// import Student from "./Student";
import Unchild from "./Unchild";
class Unmount extends React.Component{
    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
    render() {
    return(
        <div className="App">
          {
             this.state.show ? < Unchild />: <h1>Child Component Removed</h1>
          }
            <button onClick={ () => this.setState( { show:! this.state.show})}>Toggle Child Component</button>
        </div>
    )
    } 
}
    
          
           
        

export default Unmount;