import React from "react";
import User from "./Userloop";
function Loop() {
    const users=[
        {
            name: "vrushant" , email:"vrushant@teat.com" , contact: "111"
        },
        {
            name: "darshant" , email:"darshant@teat.com" , contact: "122"
        },
        {
            name: "priyank" , email:"priyank@teat.com" , contact: "133"
        },
        {
            name: "vinay" , email:"vinay@teat.com" , contact: "144"
        },
    ]
    return ( 
        <div className="App">
            <h1>Reuse component in loop</h1>
            <User />
            {
                users.map((item,i)=> 
                <User data={item }/>)
            }
        </div>
     );
}

export default Loop;