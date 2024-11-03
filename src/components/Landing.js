import React from 'react';
import { useDispatch } from 'react-redux';
import { isLoginFunc } from './redux/Reducer';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogin = () => {
    dispatch(isLoginFunc(true));
    navigator('/dashboard')
  }

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100'>
          <div className='display-3'>Welcome</div>
          <button className="btn btn-warning" onClick={handleLogin}>Login</button>
      </div>
    </>
  )
};