import React from "react";
import { Table } from "react-bootstrap";
function Nested() {
  let users = [
    {
      name: "Abc",email: "abc@Test.com",address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "20", city: "Goa", country: "India" },
        { Hn: "30", city: "Delhi", country: "India" },
        { Hn: "40", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Xyz",email: "Xyz@Test.com",address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "20", city: "Goa", country: "India" },
        { Hn: "30", city: "Delhi", country: "India" },
        { Hn: "40", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Peter",email: "peter@Test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "20", city: "Goa", country: "India" },
        { Hn: "30", city: "Delhi", country: "India" },
        { Hn: "40", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Sam", email: "sam@test.com", address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "20", city: "Goa", country: "India" },
        { Hn: "30", city: "Delhi", country: "India" },
        { Hn: "40", city: "Mumbai", country: "India" },
      ]
    },
  ]

  return (
    <div className="App">
      <h1>List with Bootstrap Table</h1>
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        {
            users.map((item, i) => 
            (
                <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            
 
               <Table variant="dark" striped>
                 <tbody>
                {item.address.map((data) =>           
                  <tr >
                    <td>{}</td>
                    <td>{data.Hn}</td>
                    <td>{data.city}</td>
                   <td>{data.country}</td>
                   </tr>
                   )}
                    </tbody>
              </Table> 
        
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Nested;
