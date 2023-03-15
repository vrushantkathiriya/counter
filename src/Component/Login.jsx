import React , {useState} from "react";
function Login() {
    const[user,setuser]=useState("");
    const[Password,setPassword]=useState("");
    const[userErr,setuserErr]=useState(false);
    const[PassErr,setPassErr]=useState(false);
   function loginHandle(e)
    {
       
        if(user.length<3 || Password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("All Good :)")
        }
        e.preventDefualt()
    }
    function userHandler(e){
    let item=e.target.value;
    if(item.length<3)
    {
        setuserErr(true)
    }
    else
    {
        setuserErr(false)
    }
      setuser(item)
}   

function PasswordHandler(e){
    let item=e.target.value;
    if(item.length<3)
    {
        setPassErr(true)
    }
    else
    {
        setPassErr(false)
    }
    setPassword(item)
   
}   
    return ( 
        <div>
            <h1>Login</h1>
            <form onClick={loginHandle}>

            <input type="text" placeholder="Enter User Id "  onChange={userHandler}/>
            {userErr?<span>User Not Valid</span>:" "}
             <br /> <br />

             <input type="Password" placeholder="Enter User Password "  onChange={PasswordHandler}/>
            {PassErr?<span>Password Not Valid</span>:" "} <br /> <br />

            <button type="submit">Login</button>
            </form>
        </div>
     );
}

export default Login;