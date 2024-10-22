import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from '../SectionTitles';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Qoshilganlar from './Qoshilganlar';
import Taom from './Taom';
import Kategoriya from './Kategoriya';

const QoshishDiv = styled.div`
  .qoshishBtns{
    margin-top: 20px;
  }
  .activeBtn{
    background-color: #FFEC00;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  border-radius: 10px;
  padding: 15px 17px;
  font-weight: 600;
  line-height: 16px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export default function Qoshish() {
  const [kategoriyalar, setKategoriyalar] = useState([]);
  // foods state;
  const [taomlar, setTaomlar] = useState([]);

  // add category function 
  const add = (kategoriyaItem) => {
    setKategoriyalar([...kategoriyalar, kategoriyaItem]);
  };

  // add food function
  const addFood = (fooditem) => {
    setTaomlar([...taomlar, fooditem]);
  }

  return (
    <QoshishDiv>
      {/* title */}
        <SectionTitles title={"Qo'shish"} description={"Yangi kategoriya/taom qo’shish"}/>

      {/* buttons */}
        <div className='qoshishBtns d-flex gap-3 btns'>
          <NavLink to={'kategoriya'} className={({isActive}) => (isActive ? 'activeBtn' : '')}>
            <StyledButton>
              Kategoriya
            </StyledButton>
          </NavLink>

          <NavLink to={'taom'} className={({isActive}) => (isActive ? 'activeBtn' : '')}>
            <StyledButton>
              Taom
            </StyledButton>
          </NavLink>

          <NavLink to={'qoshilganlar'} className={({isActive}) => (isActive ? 'activeBtn' : '')}>
            <StyledButton>
              Qo'shilganlar
            </StyledButton>
          </NavLink>
        </div>

        <Routes>
            <Route path="kategoriya" element={<Kategoriya handleKategoriyaAdd={add}/>}/>
            <Route index element={<Kategoriya/>}/>
            <Route path="taom" element={<Taom handleFoodAdd={addFood}/>}/>
            <Route path="qoshilganlar" element={<Qoshilganlar kategoriyalar={kategoriyalar} taomlar={taomlar}/>}/>
        </Routes>
    </QoshishDiv>
  )
}
