import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from '../SectionTitles';
import { Link, Route, Routes } from 'react-router-dom';
import Qoshilganlar from './Qoshilganlar';
import Taom from './Taom';
import Kategoriya from './Kategoriya';

const QoshishDiv = styled.div`
  .qoshishBtns{
    margin-top: 20px;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgYellow ? '#FFEC00' : 'transparent')};
  box-shadow: ${(props) => (props.bgYellow ? "0px 4px 4px 0px #00000040" : "none")};
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
  // bg yellow btn state;
  const [activeBtn, setActiveBtn] = useState('kategoriya');
  // category state;
  const [kategoriyalar, setKategoriyalar] = useState([]);
  // foods state;
  const [taomlar, setTaomlar] = useState([]);


  const isClickFunc = (buttonName) => {
    setActiveBtn(buttonName);
  };

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
          <Link to={'kategoriya'}>
            <StyledButton onClick={() => isClickFunc('kategoriya')} bgYellow={activeBtn === 'kategoriya'}>
              Kategoriya
            </StyledButton>
          </Link>

          <Link to={'taom'}>
            <StyledButton onClick={() => isClickFunc('taom')} bgYellow={activeBtn === 'taom'}>
              Taom
            </StyledButton>
          </Link>

          <Link to={'qoshilganlar'}>
            <StyledButton onClick={() => isClickFunc('qoshilganlar')} bgYellow={activeBtn === 'qoshilganlar'}>
              Qo'shilganlar
            </StyledButton>
          </Link>
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
