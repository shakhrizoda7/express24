import React, { useState } from 'react';
import styled from 'styled-components';

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
`

export default function Taom({handleFoodAdd}) {
  const [taom, setTaom] = useState({
    image: '',
    foodname: '',
    description: '',
    price: '',
    category: '',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setTaom((prevfood) => ({
      ...prevfood, 
      [name] : value
    }));
  };

  const foodAdd = () =>{
    if(taom.image && taom.foodname && taom.description && taom.price && taom.category){
      handleFoodAdd(taom);

      setTaom({
        image: '',
        foodname: '',
        description: '',
        price: '',
        category: '',
      });
    }
  }

  return (
    <TaomDiv>
      <div className="inputs">
        <div>
          <input type="text" placeholder="Rasm linki" 
            name='image'
            value={taom.image}
            onChange={handleChange}/>

          <input type="text" placeholder='Taom nomi'
            name='foodname'
            value={taom.foodname}
            onChange={handleChange}/>
        </div>

        <textarea type="text" placeholder="Ta'rif" 
          name='description'
          className='tarifInput' 
          rows={5}
          value={taom.description}
          onChange={handleChange}/>

        <div>
          <input type="text" placeholder='Narxi'
            name='price'
            value={taom.price}
            onChange={handleChange}/>
          
          <select name="category" value={taom.category}
            onChange={handleChange}>
            <option value="">Kategoriya</option>
            <option value="admin">Admin</option>
            <option value="yetkazuvchi">Yetkazuvchi</option>
            <option value="foydalanuvchi">Foydalanuvchi</option>
          </select>
        </div>
      </div>

      <button onClick={foodAdd}>Qo'shish</button>
    </TaomDiv>
  )
}
