import {useState} from 'react'
import { useHistory } from "react-router-dom";

function Register() {
const  history=useHistory()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

 async function userRegister(event)
  {
    event.preventDefault()

const res=await fetch('http://localhost:8080/api/register',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    name,
    email,
    pass,
  }),
})

const userData=await res.json()
if(userData.status==="ok")
{
  history.push('./login')
}

  }
  return (
  <div>
    <h1>Register</h1>
    <form onSubmit={userRegister}>
      <input
      value={name}
      onChange={(e)=>setName(e.target.value)}
      type="text"
       placeholder='Name'/>
      <br/>
      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
       type="email"
        placeholder='Email'/>
       <br/>
      <input value={pass}
      onChange={(e)=>setPass(e.target.value)}
       type="password"
        placeholder='Password'/>
        <br/>
        <input  type="submit" value="Register" />
    </form>
  </div>

  )
}

export default Register;
