import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
  h5{
      font-size: 26px;
      font-weight: 700;
  }
  .description{
      color: #5E6366;
      font-size: 12px;
      letter-spacing: 0.4px;
  }
`

export default function SectionTitles({title, description}) {
  return (
    <TitleDiv>
        <h5>{title}</h5>
        <p className='description'>{description}</p>
    </TitleDiv>
  )
}
