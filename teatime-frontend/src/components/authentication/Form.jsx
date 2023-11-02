import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri"
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

function Form({ formType, handleSubmit, responseMsg }) {
  const sharedState = useContext(AuthContext);
  const { formData, handleInputChange } = sharedState;
//   const customProps = {
//     formData: formData,
//   }


  return (
    <>
      {responseMsg && <h2>{responseMsg}</h2>}
      <div className="page">
      <div className="login">
        <h2>{formType}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <div className="icon">
              <MdEmail />
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              name='password'
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="icon">
              <FaLock />
            </div>
          </div>
          <button type="submit">{formType}</button>
          {formType === 'Login' && 
        <div className="signup-link">
        {/* <p>Need an account? <Link className='link' to={{pathname: '/Signup', state: customProps}}>Sign-Up</Link></p> */}
        <p>Need an account? <Link className='link' to={{pathname: '/Signup'}}>Sign-Up</Link></p>
      </div>
          }
          {formType === 'Signup' && 
        <div className="signup-link"> 
        {/* <p>Back to <Link className='link' to={{pathname: '/', state: customProps}}>Login?</Link></p> */}
        <p>Back to <Link className='link' to={{pathname: '/'}}>Login?</Link></p>
      </div>
          }
        </form>
      </div>
      </div>
    </>
  );
}

export default Form;