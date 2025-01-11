import { useState } from "react";
import "./App.css";

function App() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex bg-red-50 mt-[50%] border-blue-400 items-center justify-center">
        <form className="flex flex-col items-center justify-center p-3 gap-6">
          <div className="">
            <label>Name: </label>
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="h-10 p-3" 
            type="text" 
            placeholder="Type here..." 
            />
          </div>
          <div>
            <label>Email: </label>
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="h-10 p-3" 
            type="email" 
            placeholder="Type here..." />
          </div>

          <div>
            <label>Password: </label>
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="h-10 p-3"
             type="password" 
             placeholder="Type here..." />
          </div>
        </form>


       
      </div>
      <div className="">
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
          <h1>Password: {password}</h1>
        </div>
    </>
  );
}

export default App;
