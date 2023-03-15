import React from "react";
import { Table } from "react-bootstrap";
function table() {
    const table=
    [
        {name:"Abc",email : 'abc@Text.com',contact: '555'},
        {name:"Xyz",email : 'Xyz@Text.com',contact:'111'},
        {name:"sam",email : 'sam@Text.com',contact:'222'},
        {name:"peter",email :'peter@Text.com',contact:'333'},
    ]
    
    return ( 
        <div className="App">
            <h1>List with Bootstrap Table</h1>
            <Table striped variant="dark">
                <tbody>
            <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                 </tr>
            {
                 table.map((item,i)=>
                 
                 <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                 </tr>
                 )
            }
            </tbody>
            
            </Table>
        </div>
     );
}

export default table;