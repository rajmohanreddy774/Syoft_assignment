

import {useState} from 'react'

function Login() {

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')

 async function userLogin(event)
  {
    event.preventDefault()

const res=await fetch('http://localhost:8080/api/login',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    email,
    pass,
  }),
})

const userData=await res.json()

console.log(userData)
if(userData.user)
{
  alert('login succesfull')
  window.location.href='/product'
}
else{
  alert('Enter correct password or email')
}

  }
  return (
  <div>
    <h1>Login</h1>
    <form onSubmit={userLogin}>
     
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

export default Login;
