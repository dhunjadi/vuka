import React, { useState, useContext } from "react";
import logo from "../images/logo.png";
import { UserContext } from "../context/UserContex";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  
  const {userList, setLoggedInUser} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showError, setShowError] = useState(false)
  const history = useHistory();

  const handleLogin = (e) =>{
    e.preventDefault()
    const found = (userList.find(user => user.email === email && user.password === password))
    if(found){
      setLoggedInUser(found)
      history.push('/home')
    } else{
      setShowError(true)
    }
 
  } 

  if (showError && email.length === 0) {
    setShowError(false);
  }

  return (
    <div id="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <input type="text" placeholder="example@vuka.hr" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          {showError ? <p className='login-error'>Incorrect Email or password</p> : null}
          <button onClick={handleLogin} >Login</button>
        </form>
      </div>
    </div>
  );
}
