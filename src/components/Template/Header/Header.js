import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 4px 0px #00000020;
    padding: 15px 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    i, .admin{
        cursor: pointer;
    }
`;

export default function Header({toggleAside}) {
  return (
    <HeaderDiv>
        <i class="bi bi-list fs-4" onClick={toggleAside}></i>

        <div className="admin d-flex align-items-center gap-2">
            <i class="bi bi-person fs-4"></i>
            <h5 className='m-0'>Admin</h5>
        </div>
    </HeaderDiv>
)
}
