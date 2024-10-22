import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionTitles from './Main/SectionTitles'
import { LoginContext } from '../../App';

export default function Admin() {
  const {isLogin, setLogin} = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <SectionTitles title={'Admin'}/>
        <button className="btn btn-warning" onClick={() => {
          setLogin(false);
          navigate('/');
        }}><i class="bi bi-box-arrow-right"></i></button>
    </div>
  )
}
