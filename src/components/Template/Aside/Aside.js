import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AsideDiv = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #FFFCED;
    padding: 32px 40px;
    z-index: 1;
    transition: 0.5s;

    .menu{
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        a{
            text-decoration: none;
            color: black;
        }

        .active{
            width: 322px;
            height: 56px;
            border-radius: 8px;
            background-color: #FFE066;
        }
    }
`;

const MenuSection = styled.div`
    width: 322px !important;
    height: 56px !important;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    padding: 8px 0 0 12px;
    border-radius: 8px !important;

    &:hover{
        background-color: #FFE066;
    }

    .icon{
        text-align: center;
        margin-top: -15px;
        
        svg, i{
            width: 28px;
            height: 28px;
        }
    }

    .menuTitle{
        display: flex;
        flex-direction: column;
        gap: 2px;

        p{
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            color: #5E6366;
        }
    }
`;

// menu datas;
const MenuData = [
    {
        path: 'arizalar',
        svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V7.03C18.39 7.52 21 10.42 21 13.95C21 14.85 20.82 15.7 20.5 16.49L23.12 18.02C23.68 16.78 24 15.4 24 13.95C24 8.77 20.05 4.5 15 4ZM14 20.95C12.1435 20.95 10.363 20.2125 9.05025 18.8997C7.7375 17.587 7 15.8065 7 13.95C7 10.42 9.61 7.52 13 7.03V4C7.94 4.5 4 8.76 4 13.95C4 16.6022 5.05357 19.1457 6.92893 21.0211C7.85752 21.9497 8.95991 22.6863 10.1732 23.1888C11.3864 23.6913 12.6868 23.95 14 23.95C17.3 23.95 20.23 22.34 22.05 19.86L19.45 18.33C18.17 19.95 16.21 20.95 14 20.95Z" fill="#78909C"/></svg>,
        title: 'Arizalar',
        description: 'Yetib kelgan arizalarni kuzatishingiz mumkin'
    },
    {
        path: 'yetkazilgan',
        svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.78 4L26 8.22L10.44 23.8L2 15.35L6.22 11.13L10.44 15.35L21.78 4ZM21.78 6.8L10.44 18.16L6.22 13.99L4.81 15.35L10.44 20.97L23.19 8.22L21.78 6.8Z" fill="#78909C"/></svg>,
        title: 'Yetkazilgan',
        description: 'Yetkazilgan taomlar ro’yxati bilan tanishing'
    },
    {
        path: 'statistika',
        svg: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 23H4V5H6V21H8V12H12V21H14V8H18V21H20V16H24V23Z" fill="#78909C"/></svg>,
        title: 'Statistika',
        description: 'Diagrammalar bilan ishlangan statistika'
    },
    {
        path: 'qoshish',
        svg: <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0C9.81494 0 10.117 0.125111 10.3397 0.347811C10.5624 0.57051 10.6875 0.872555 10.6875 1.1875V8.3125H17.8125C18.1274 8.3125 18.4295 8.43761 18.6522 8.66031C18.8749 8.88301 19 9.18506 19 9.5C19 9.81494 18.8749 10.117 18.6522 10.3397C18.4295 10.5624 18.1274 10.6875 17.8125 10.6875H10.6875V17.8125C10.6875 18.1274 10.5624 18.4295 10.3397 18.6522C10.117 18.8749 9.81494 19 9.5 19C9.18506 19 8.88301 18.8749 8.66031 18.6522C8.43761 18.4295 8.3125 18.1274 8.3125 17.8125V10.6875H1.1875C0.872555 10.6875 0.57051 10.5624 0.347811 10.3397C0.125111 10.117 0 9.81494 0 9.5C0 9.18506 0.125111 8.88301 0.347811 8.66031C0.57051 8.43761 0.872555 8.3125 1.1875 8.3125H8.3125V1.1875C8.3125 0.872555 8.43761 0.57051 8.66031 0.347811C8.88301 0.125111 9.18506 0 9.5 0Z" fill="#367BF5"/></svg>,
        title: 'Qo’shish',
        description: 'Yangi taom qo’shish '
    },
    {
        path: 'foydalanuvchilar',
        svg: <i class="bi bi-people fs-4 text-secondary"></i>,
        title: 'Foydalanuvchilar',
        description: 'Rollarni biriktirishingiz mumkin'
    }
]

export default function Aside() {
  return (
    <AsideDiv>
        <img src="https://s3-alpha-sig.figma.com/img/3adf/337a/c92ea43a8230d3202109b56332279b90?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f~jmHUsJTm4anYfSJxDMKUeBxI~WWtaI9hSPuukTYmqzJr-I2rJCDcS5myWvjk6ECRUrhcIXeZX66KrB5DMgm8fniOT9B-L8SOdguWdonIMm57qF3Pf7w9HIoUN9yclLgWNvB0--82aDO-vLKL-mzdhINU6PskdZJAjcLSwM3hdbYX~yezKk7AkkFOc-B11CEC3rPdy2S5eNhv991GuhxJMiiYXDK--JMC2pApDB4rn3S3DQihJDroboRwDTuWCG1qrMocjTwW4o9iWdJWr4L3uK2yKdJqVmTX9Q1vAHPPdih3vP2P~12hTCTf6wyWFNZ4IXBrqFM0VdDXo3nMfmIA__" alt="express24 logo" />

        <div className="menu">
            {MenuData.map((item, index) => (
                <NavLink to={item.path} className={({isActive}) => (isActive ? 'active' : '')}>
                    <MenuSection>
                        <div className="icon">
                            {item.svg}
                        </div>
                        <div className='menuTitle'>
                            <h6 className='m-0'>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    </MenuSection>
                </NavLink>
            ))}
        </div>
    </AsideDiv>
  )
}
