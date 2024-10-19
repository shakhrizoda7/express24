import React from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';

const StatistikaDiv = styled.div``;

export default function Statistika() {
  return (
    <StatistikaDiv>
        <SectionTitles title={'Statistika'} description={"Diagrammalar bilan ishlangan statistika"}/>
    </StatistikaDiv>
  );
}
