import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';
import SectionTables from './SectionTables';

const ArizalarDiv = styled.div``;

const initialData = [
    {fullname: 'Abdulaziz Ochilov', foodname: 'Osh', price: '20 000', number: '2', totalprice: '40 000', phone: '+998 97 888 10 27', comment: 'Lorem ipsum'},
    {fullname: 'Ergashev Islom', foodname: 'Osh', price: '20 000', number: '1', totalprice: '20 000', phone: '+998 97 888 12 35', comment: '...'},
    {fullname: 'Samidullayev Bahodir', foodname: 'Manti', price: '5 000', number: '10', totalprice: '50 000', phone: '+998 93 234 10 23', comment: '...'},
    {fullname: 'To’ramurodov Shoislom', foodname: 'Big Lavash', price: '24 000', number: '3', totalprice: '72 000', phone: '+998 90 375 67 15', comment: '...'},
];

export default function Arizalar() {
  const [tableData, setTableData] = useState(initialData);

  return (
    <ArizalarDiv>
        <SectionTitles title={'Arizalar'} description={"Yetib kelgan arizalarni kuzatishingiz mumkin"}/>

        {/* table */}
        <SectionTables data={tableData} status={'Izoh'}/>
    </ArizalarDiv>
  )
}
