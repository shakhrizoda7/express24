import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../App';

export default function Landing() {
  const {isLogin, setLogin} = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <>
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100'>
            <div className='display-3'>Welcome</div>
            <button className="btn btn-warning" onClick={() => {
              setLogin(true);
              navigate('/dashboard');
            }}>Login</button>
        </div>
    </>

  )
}
