import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addFood } from '../../../redux/Actions';

const TaomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding-top: 45px;

  .inputs{
    display: flex;
    flex-direction: column;
    gap: 27px;

    input{
      height: 45px;
      padding: 20px;
      border-radius: 10px;
      border: 1px solid gray;
    }
    
    .tarifInput{
      height: 180px;
      padding: 14px 20px;
      border-radius: 10px;
    }

    div{
      display: flex;
      gap: 19px;

      input{
        width: 500px;
      }

      select{
        width: 500px;
        padding: 10px;
        color: gray;
        border-radius: 10px;
      }
    }
  }

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
`;

export default function Taom() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.addReducer.category);

  // food state
  const [food, setFood] = useState({image: '', foodname: '', description: '', price: '', category: ''});

  // onchange
  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  // food function
  const foodAdd = () => {
    if(food.image !== '' && food.foodname !== '' && food.description !== '' && food.price !== '' && food.category !== ''){
      dispatch(addFood(food));
  
      // clear input
      setFood({ image: '', foodname: '', description: '', price: '', category: ''});
    } else {
      alert("To'liq to'ldirilmagan");
    }
  };
 
  return (
    <TaomDiv>
      <div className="inputs">
        <div>
          <input type="text" placeholder="Rasm linki" name='image'
            value={food.image}
            onChange={handleChange}/>

          <input type="text" placeholder='Taom nomi'
            name='foodname'
            value={food.foodname}
            onChange={handleChange}/>
        </div>

        <textarea type="text" placeholder="Ta'rif" 
          name='description'
          className='tarifInput' 
          rows={5}
          value={food.description}
          onChange={handleChange}/>

        <div>
          <input type="text" placeholder='Narxi'
            name='price'
            value={food.price}
            onChange={handleChange}/>
          
          <select name="category" value={food.category} onChange={handleChange}>
            <option value="">Kategoriya</option>

            {category && category.length > 0 ? (
              category.map((categoryItem) => (
                <option value={categoryItem}>{categoryItem}</option>
              ))
            ) : (<option value="kategoriya 1" disabled>Kategoriya qo'shilmagan!</option>) }
          </select>
        </div>
      </div>

      <button onClick={foodAdd}>Qo'shish</button>
    </TaomDiv>
  )
}
