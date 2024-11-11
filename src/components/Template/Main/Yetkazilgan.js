import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';
import SectionTables from './SectionTables';
import { useSelector } from 'react-redux';

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

export default function Yetkazilgan() {
  const deliveredTableData = useSelector(state => state.layout.deliveredTableData);

  return (
    <YetkazilganDiv>
        <SectionTitles title={'Yetkazilgan'} description={"Yetkazilgan taomlar ro’yxati bilan tanishing"}/>

        {/* table */}
        <SectionTables data={deliveredTableData} tableType={'deliveredTableData'} status={'Status'}/>
    </YetkazilganDiv>
  )
}
