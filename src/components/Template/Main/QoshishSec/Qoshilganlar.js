import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const QoshilganlarDiv = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 290px);
    padding: 45px 0 10px 15px;

    .card {
        border: none !important;
        background-color: #FFFCED;
    }
`;

export default function Qoshilganlar() {
  const category = useSelector((state) => state.addReducer.category);
  const foods = useSelector((state) => state.addReducer.foods);

  return (
    <QoshilganlarDiv>
        {/* category div */}
        <div>
            <h5>Qo'shilgan Kategoriyalar:</h5>
            
            <ol className='ps-3'>
                {category.map((category, index) => (
                    <li key={index} className='pt-2'>{category}</li>
                ))}
            </ol>
        </div>

        {/* food div */}
        <div className="foodDiv mt-5">
            <h5>Qo'shilgan Taomlar:</h5>
            
            <div className="d-flex gap-4 align-items-center">
                {foods.map((food, index) => (
                    <Card key={index} style={{ width: '18rem' }} className='mt-4 shadow-sm card'>
                        <Card.Img variant="top" src={food.image} />
                        <Card.Body>
                            <Card.Title>{food.foodname}</Card.Title>
                            <Card.Text>{food.description}</Card.Text>
                            <h6>{food.price} so'm</h6>
                            <p>• {food.category}</p>
                        </Card.Body>  
                    </Card>
                ))}
            </div>
        </div>
    </QoshilganlarDiv>
  );
}
