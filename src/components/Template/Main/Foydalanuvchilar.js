import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';

const FoydalanuvchiDiv = styled.div`
    .description{
        color: #F3AA18 !important;
    }
    .table{
        thead{
            td{
                font-size: 14px;
                color: #919699 !important;
                border-bottom: 2px solid #919699;
            }
        }
        i{
            cursor: pointer;
        }
    }
    .totalPriceDiv{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
`;

const initialData = [
  {fullname: 'Abdulaziz Ochilov', phone: '+998 97 888 10 27', role: 'admin'},
  {fullname: 'Ergashev Islom', phone: '+998 97 888 12 35', role: 'yetkazuvchi'},
  {fullname: 'Samidullayev Bahodir', phone: '+998 93 234 10 23', role: 'foydalanuvchi'},
  {fullname: 'To’ramurodov Shoislom', phone: '+998 90 375 67 15', role: 'foydalanuvchi'},
];

export default function Foydalanuvchilar() {
  const [tableData, setTableData] = useState(initialData);

  return (
    <FoydalanuvchiDiv>
        <SectionTitles title={"Foydalanuvchilar"} description={"Rollarni biriktirishingiz mumkin"}/>

        <table className="table">
            <thead className='thead'>
                <tr>
                    <td>#</td>
                    <td>To'liq ismi</td>
                    <td>Telefon raqami</td>
                    <td>Roli</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.fullname}</td>
                        <td>{item.phone}</td>
                        <td>{item.role}</td>
                        <td className='px-0'><i class="bi bi-pen"></i></td>
                        <td className='px-1 text-danger'><i class="bi bi-trash3"></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="totalPriceDiv">
            <p>Jami</p>
            <p>{tableData.length} ta akkaunt</p>
        </div>
    </FoydalanuvchiDiv>
  )
}
