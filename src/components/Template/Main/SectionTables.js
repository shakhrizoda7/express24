import React from 'react';
import styled from 'styled-components';

const TableStyled = styled.div`
    .table{
        thead{
            td{
                font-size: 14px;
                color: #919699 !important;
                border-bottom: 2px solid #919699;
            }
        }
    }
    .totalPriceDiv{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
`;

export default function SectionTables({data, status}) {

  const totalPrice = data.reduce((sum, item) => sum + parseFloat(item.totalprice.replace(/\s/g, '')), 0);

  return (
    <TableStyled>
        <table className="table">
            <thead className='thead'>
                <tr>
                    <td>#</td>
                    <td>To'liq ismi</td>
                    <td>Taom nomi</td>
                    <td>Narxi</td>
                    <td>Soni</td>
                    <td>Umumiy narx</td>
                    <td>Telefon raqami</td>
                    <td>{status}</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.fullname}</td>
                        <td>{item.foodname}</td>
                        <td>{item.price}</td>
                        <td>{item.number}</td>
                        <td>{item.totalprice}</td>
                        <td>{item.phone}</td>
                        <td>{item.comment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="totalPriceDiv">
            <p>Jami</p>
            <p>{totalPrice} so’m</p>
        </div>
    </TableStyled>
  )
}
