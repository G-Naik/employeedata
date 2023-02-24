import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Homepage = () => {

    let[login,setLogin] = useState([])
    let[password,setPassword] = useState([])

    let navigate = useNavigate()

   let handleSubmit = () =>{
        if(login === "aadh@gmail.com" && password === "abc@1234"){
            navigate('/admin')
        }else{
            alert('invalid Credentials')
        }

   }
    
    return ( 
        <div className="name-login">

        <div className="border rounded m-auto w-50 p-2 ">
            <h1>Login Form</h1>
                <div>
                <label htmlFor="" className="m-2">UserName</label>
                <input type="email" value={login} onChange={(e) => setLogin(e.target.value)} className="w-100 p-2 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="m-2">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-100 p-2 rounded" />
                </div>      
            <button onClick={handleSubmit} className="btn btn-success m-2 ">Submit</button>
        </div>
        </div>
     );
}
 
export default Homepage;