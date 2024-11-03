import React from 'react'
import { useDispatch } from 'react-redux';
import SectionTitles from './Main/SectionTitles';
import { isLoginFunc } from './../redux/Reducer';

export default function Admin() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(isLoginFunc(false));
  }

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <SectionTitles title={'Admin'}/>
      <button className="btn btn-warning" onClick={handleLogin}><i class="bi bi-box-arrow-right"></i></button>
    </div>
  );
}