import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function Logout() {

    const sharedState = useContext(AuthContext);
    const {authToken, setAuthToken } = sharedState
    // const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        setAuthToken(null);
    }

        return(
        <>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout} >Logout</button>
        </>
        )
    }
