import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// template div style
const TemplateDiv = styled.div`
    ::selection{
        background-color: #FFE066;
    }
    display: flex;

    .rightside{
        flex: 1;

        main{
            padding: 50px 45px;
        }
    }
`;

export default function Template() {
  const isVisible = useSelector((state) => state.isVisible);

  return (
        <TemplateDiv>
            <aside>
                {!isVisible && <Aside/>}
            </aside>

            <section className='rightside'>
                <header>
                    <Header/>
                </header>

                <main>
                    <Outlet/>
                </main>
            </section>
        </TemplateDiv>
    )
}
