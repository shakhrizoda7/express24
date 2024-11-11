import React, {useState } from 'react';
import styled from 'styled-components';
import SectionTitles from './SectionTitles';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, removeTableUser } from '../../redux/Actions';

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

        tbody{
            .fullnameInp{
                width: 170px;
            }
            .phoneInp{
                width: 140px;
            }
            .roleInp{
                width: 100px;
            }    
            input{
                border: none;
                outline: none;
                padding: 0;
            }
            i{
                cursor: pointer;
            }
        }
    }
    .totalPriceDiv{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
    }
`;

export default function Foydalanuvchilar() {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const tableUserData = useSelector(state => state.layout.userTableData);

  const handleEditClick = (index, item) => {
    setEditIndex(index);
    setEditData(item);
  };

  const handleInputChange = (e, field) => {
    setEditData({...editData, [field]: e.target.value});
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
        dispatch(editItem('userTableData', editIndex, editData));
        
        setEditIndex(null);  // Reset the index
        setEditData({});     // Reset the data
    }
  }

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
                {tableUserData.map((item, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>
                            {editIndex === index ? (
                                <input type="text" value={editData.fullname || ''} onChange={(e) => handleInputChange(e, 'fullname')}  className='fullnameInp'/>
                            ) : item.fullname}
                        </td>
                        <td>
                            {editIndex === index ? (
                                <input type="text" value={editData.phone || ''} onChange={(e) => handleInputChange(e, 'phone')}  className='phoneInp'/>
                            ) : item.phone}
                        </td>
                        <td>{editIndex === index ? (
                                <input type="text" value={editData.role || ''} onChange={(e) => handleInputChange(e, 'role')}  className='roleInp'/>
                            ) : item.role}
                        </td>

                        <td className='px-0'>
                            {editIndex === index ? (
                                <i class="bi bi-check-lg" onClick={handleSaveEdit}></i>
                            ) : (
                                <i className="bi bi-pen" onClick={() => handleEditClick(index, item)}></i>
                            )}
                        </td>
                        <td className='px-1 text-danger' onClick={() => dispatch(removeTableUser('userTableData', index))}><i class="bi bi-trash3"></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="totalPriceDiv">
            <p>Jami</p>
            <p>{tableUserData.length} ta akkaunt</p>
        </div>
    </FoydalanuvchiDiv>
  )
}
