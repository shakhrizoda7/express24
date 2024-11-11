import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SectionTitles from './Main/SectionTitles';
import { isLoginFunc } from '../redux/Actions';

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(isLoginFunc(false));
    localStorage.setItem('islogin', 'false');
    navigate('/');
  }

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <SectionTitles title={'Admin'}/>
      <button className="btn btn-warning" onClick={handleLogin} title='Logout'><i class="bi bi-box-arrow-right"></i></button>
    </div>
  );
}