import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const QoshilganlarDiv = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 290px);
    padding: 45px 0 10px 15px;

    .card{
        border: none !important;
        background-color: #FFFCED;
    }
`

export default function Qoshilganlar({kategoriyalar, taomlar}) {
  return (
    <QoshilganlarDiv>
        {/* category div */}
        <div>
            <h5>Qo'shilgan Kategoriyalar:</h5>
            <ol className='ps-3'>
                {kategoriyalar.map((kategoriya, index) => (
                    <li key={index} className='pt-2'>{kategoriya}</li>
                ))}
            </ol>
        </div>

        {/* food div */}
        <div className="foodDiv mt-5">
            <h5>Qo'shilgan Taomlar:</h5>

            {taomlar.map((taom, index) => (
                <Card style={{ width: '18rem' }} className='mt-4 shadow-sm card'>
                    <Card.Img variant="top" src={taom.image} />
                    <Card.Body>
                        <Card.Title>{taom.foodname}</Card.Title>
                        <Card.Text>{taom.description}</Card.Text>
                        <h6>{taom.price} so'm</h6>
                        <p>• {taom.category}</p>
                    </Card.Body>  
                </Card>
            ))}
        </div>
    </QoshilganlarDiv>
  );
}
