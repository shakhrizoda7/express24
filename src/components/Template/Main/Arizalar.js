import React from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';
import SectionTables from './SectionTables';
import { useSelector } from 'react-redux';

const ArizalarDiv = styled.div``;

export default function Arizalar() {
  const petitionTableData = useSelector(state => state.layout.petitionTableData)

  return (
    <ArizalarDiv>
        <SectionTitles title={'Arizalar'} description={"Yetib kelgan arizalarni kuzatishingiz mumkin"}/>

        {/* table */}
        <SectionTables data={petitionTableData} tableType={'petitionTableData'} status={'Izoh'}/>
    </ArizalarDiv>
  )
}
