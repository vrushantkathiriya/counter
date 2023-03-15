import React , {Component} from "react";
//import App from "../App";

 class Data extends Component {

    constructor()
    {
        super();
        this.state={
            data:"Vrushant"
        }
    }

    render()
    {
        return (  
            // <h1>Hello World !!</h1>
            <h1>{this.state.data} </h1>
            );   
    }

    
   

}

export default Data;