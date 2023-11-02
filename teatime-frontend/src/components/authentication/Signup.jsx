import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { signup } from "../../api/authApi";
import Form from './Form';


export default function Signup() {
  const sharedState = useContext(AuthContext)
  const { formData, handleInputChange } = sharedState

  const [responseMsg, setResponseMsg] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const context = {username: formData.username, password: formData.password}
    const response = await signup(context)
    if(response.password) {
      setShouldRedirect(true)
    } else {
      setResponseMsg(response.username)
    }
  }

  if (shouldRedirect) {
    return <Navigate to="/login"/>
  } else {
    return <Form formType={"Signup"} handleSubmit={handleSubmit} responseMsg={responseMsg}/>
  }

}