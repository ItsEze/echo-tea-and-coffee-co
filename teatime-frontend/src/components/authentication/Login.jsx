import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { login } from '../../api/authApi';
import { AuthContext } from '../../context/AuthContext';
import Form from './Form';

export default function Login() {
  const sharedState = useContext(AuthContext);
  const { formData, handleInputChange, handleToken } = sharedState

  const [responseMsg, setResponseMsg] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const context = { username: formData.username, password: formData.password }
    const token = await login(context)
    if (!token) {
      setResponseMsg("Error logging in")
    } else {
      localStorage.setItem("authToken", token)
      handleToken(token)
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    return <Navigate to="/home"/>
  } else {
    return <Form key={'Login'} formType={"Login"} handleSubmit={handleSubmit} responseMsg={responseMsg}/>
  }
}