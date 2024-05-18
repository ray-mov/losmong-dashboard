import { useState } from "react"
import {account} from "../lib/appwrite"
import {  useNavigate } from "react-router-dom"
import { login } from "../redux/authSlice"
import { useDispatch } from "react-redux"


const Login = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {    
     const response = await  account.createEmailPasswordSession(email, password);     
       if (response) {
        const userData = await account.get();
        if (userData) {
          dispatch(login(userData)) 
          navigate("/home")
        } else{
          navigate("/login")
        }  
       } 
       console.log(response)
    } catch (error) {
      alert("invalid credencial", error)
      navigate("/login")
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-semibold">Admin Login</h1>
        <input type="email" placeholder="Email" className="p-2 border rounded-md" value={email} onChange={ (event) => { setEmail(event.target.value)}}/>
        <input type="password" name="" id="" placeholder="password" className="p-2 border rounded-md" value={password} onChange={ (event) => { setPassword(event.target.value)}}/>
        <button className="p-2 border rounded-md font-medium" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login