import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../redux/Actions';

const KategoriyaDiv = styled.div`
  padding: 45px 146px 0 0;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;

    button{
      background-color: #FFEC00;
      box-shadow: 0px 4px 4px 0px #00000040;
      border: none;
      border-radius: 10px;
      padding: 15px 17px;
      font-weight: 600;
      line-height: 16px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:active{
        background-color: #FFE066;
      }
    }
  }

`;

export default function Kategoriya() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const handleAdd = () => {
    if (category) {
      dispatch(addCategory(category))
      setCategory('');
    }
  };

  return (
    <KategoriyaDiv>
      <div>
        <input type="text" className='form-control' 
          placeholder='Kategoriya nomi'
          value={category} 
          onChange={(e) => setCategory(e.target.value)}/>

        <button onClick={handleAdd}>Qo'shish</button>
      </div>
    </KategoriyaDiv>
  )
}
