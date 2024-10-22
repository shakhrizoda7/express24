import React, { useState } from 'react';
import styled from 'styled-components';

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

export default function Kategoriya({handleKategoriyaAdd}) {
  const [kategoriya, setKategoriya] = useState('');

  const handleAdd = () => {
    if (kategoriya) {
      handleKategoriyaAdd(kategoriya);
      setKategoriya('');
    }
  };

  return (
    <KategoriyaDiv>
      <div>
        <input type="text" className='form-control' placeholder='Kategoriya nomi' value={kategoriya} onChange={(e) => setKategoriya(e.target.value)}/>

        <button onClick={handleAdd}>Qo'shish</button>
      </div>
    </KategoriyaDiv>
  )
}
