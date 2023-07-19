
import './login_.css'
import { useState} from "react";
// import {UserContext} from "./UserContext";
import { Navigate,Link, useNavigate } from "react-router-dom";


export default function Login() {
  
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  // const {setUserInfo} = useContext(UserContext);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('https://amenitysece.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        // setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    console.log("hi")
    return <Navigate to={'/home'} />
   // navigate('/login');
  }
  return (
    <div className="full">
      <form className="authform" onSubmit={login}>
      <h1>Login</h1>
      <div className='input_area'>
      <br/>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
             <br/>
  
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
             <br/>
      <button className='btn'>Login</button>
      </div>
    </form>
    </div>
    
  );
}
