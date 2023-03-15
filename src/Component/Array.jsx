import React from "react";

function Array() {
    
    const Array=
    [
        {name:"Abc",email : 'abc@Text.com',contact:555},
        {name:"Xyz",email : 'Xyz@Text.com',contact:111},
        {name:"sam",email : 'sam@Text.com',contact:222},
        {name:"peter",email : 'peter@Text.com',contact:333},
    ]
    
    return ( 
        <div className="App">
            <h1>Handle Array with list</h1>
            <table border="1">
            <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
            {
                Array.map((data)=>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                </tr>
                )
            }
            </table>
        </div>
     );
}

export default Array;