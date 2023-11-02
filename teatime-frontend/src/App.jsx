import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import { AuthContext } from './context/AuthContext';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Logout from './components/authentication/Logout';

export default function App() {
  const [authToken, setAuthToken] = useState(null);
  const [formData, setFormData] = useState({username: '', password: ''});
  // const navigate = useNavigate()


  const inputRef = useRef(null);
  
  const handleToken = (token) => {
    setFormData({ username: '', password: '' });
    setAuthToken(token);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  const sharedState = {
    authToken, 
    setAuthToken,
    formData,
    setFormData,
    handleInputChange,
    handleToken,
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token && !authToken) {
      handleToken(token)
    }
  }, [])

  return(
    <AuthContext.Provider value={sharedState}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};


