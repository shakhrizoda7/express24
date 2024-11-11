import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoginFunc } from './redux/Actions';

export default function Landing() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const isLogin = useSelector(state => state.layout.isLogin);

  const handleLogin = () => {
    dispatch(isLoginFunc(true));
    localStorage.setItem('islogin', 'true');
    navigator('/dashboard');
  };

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100'>
          <div className='display-3'>Welcome</div>
          <button className="btn btn-warning" onClick={handleLogin}>{isLogin ? 'Login' : 'Sign up'}</button>
      </div>
    </>
  )
};