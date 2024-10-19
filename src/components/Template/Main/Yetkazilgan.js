import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';
import SectionTables from './SectionTables';

const YetkazilganDiv = styled.div`
    .titleDiv{
        h5{
            font-size: 26px;
            font-weight: 700;
        }
        p{
            color: #5E6366;
            font-size: 12px;
            letter-spacing: 0.4px;
        }
    }
`;

const initialData = [
    {fullname: 'Abdulaziz Ochilov', foodname: 'Osh', price: '20 000', number: '2', totalprice: '40 000', phone: '+998 97 888 10 27', comment: 'yetkazilgan'},
    {fullname: 'Ergashev Islom', foodname: 'Osh', price: '20 000', number: '1', totalprice: '20 000', phone: '+998 97 888 12 35', comment: 'yetkazilgan'},
    {fullname: 'Samidullayev Bahodir', foodname: 'Manti', price: '5 000', number: '10', totalprice: '50 000', phone: '+998 93 234 10 23', comment: 'yetkazilgan'},
    {fullname: 'To’ramurodov Shoislom', foodname: 'Big Lavash', price: '24 000', number: '3', totalprice: '72 000', phone: '+998 90 375 67 15', comment: 'yetkazilgan'},
];

export default function Yetkazilgan() {
  const [tableData, setTableData] = useState(initialData);

  return (
    <YetkazilganDiv>
        <SectionTitles title={'Yetkazilgan'} description={"Yetkazilgan taomlar ro’yxati bilan tanishing"}/>

        {/* table */}
        <SectionTables data={tableData} status={'Status'}/>
    </YetkazilganDiv>
  )
}
