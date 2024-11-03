import React from 'react';
import styled from 'styled-components';
import SectionTitles from '../SectionTitles';
import { NavLink, Route, Routes } from 'react-router-dom';
import Qoshilganlar from './Qoshilganlar';
import Taom from './Taom';
import Kategoriya from './Kategoriya';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addFood } from '../../../redux/Reducer';

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
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);
  const foods = useSelector(state => state.food);

  // add category function 
  const handleCategoryAdd = (categpryItem) => {
    dispatch(addCategory(categpryItem));
  };

  // add food function
  const handleFoodAdd = (foodItem) => {
    dispatch(addFood(foodItem));
  };

  // btns data
  const qoshishBtnsData = [
    {title: 'Kategoriya', path: 'kategoriya'},
    {title: 'Taom', path: 'taom'}, 
    {title: "Qo'shilganlar", path: 'qoshilganlar'}
  ];

  return (
    <QoshishDiv>
      {/* title */}
        <SectionTitles title={"Qo'shish"} description={"Yangi kategoriya/taom qo’shish"}/>

      {/* buttons */}
        <div className='qoshishBtns d-flex gap-3 btns'>
          {qoshishBtnsData.map((item) => (
            <NavLink to={item.path} className={({isActive}) => (isActive ? 'activeBtn' : '')}>
              <StyledButton>
                {item.title}
              </StyledButton>
            </NavLink>
          ))}
        </div>

        <Routes>
            <Route path="kategoriya" element={<Kategoriya handleKategoriyaAdd={handleCategoryAdd}/>}/>
            <Route index element={<Kategoriya/>}/>
            <Route path="taom" element={<Taom handleFoodAdd={handleFoodAdd}/>}/>
            <Route path="qoshilganlar" element={<Qoshilganlar katagoriya={categories} taom={foods}/>}/>
        </Routes>
    </QoshishDiv>
  )
}
