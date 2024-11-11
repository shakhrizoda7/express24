import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editItem, removeTableUser } from '../../redux/Actions';

const TableStyled = styled.div`
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
            .foodnameInp{
                width: 80px; 
            }
            .priceInp{
                width: 50px;
            }
            .numberInp{
                width: 30px;
            }
            .totalpriceInp{
                width: 80px;
            }
            .phoneInp{
                width: 140px;
            }
            .commentInp{
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

export default function SectionTables({ data, tableType, status }) {
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({});

    const totalPrice = data.reduce((sum, item) => sum + parseFloat(item.totalprice.replace(/\s/g, '')), 0);

    // edit function
    const handleEditClick = (index, item) => {
        setEditIndex(index);
        setEditData(item);
    };

    // input onchange function
    const handleInputChange = (e, field) => {
        setEditData({ ...editData, [field]: e.target.value });
    };

    // edits save
    const handleSaveEdit = () => {
        if (editIndex !== null) {
            dispatch(editItem(tableType, editIndex, editData));
            setEditIndex(null);  // Reset the index
            setEditData({});     // Reset the data
        }
    };

    return (
        <TableStyled>
            <table className="table">
                <thead className='thead'>
                    <tr>
                        <td>#</td>
                        <td>To'liq ismi</td>
                        <td>Taom nomi</td>
                        <td>Narxi</td>
                        <td>Soni</td>
                        <td>Umumiy narx</td>
                        <td>Telefon raqami</td>
                        <td>{status}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>

                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.fullname || ''} onChange={(e) => handleInputChange(e, 'fullname')}  className='fullnameInp'/>
                                ) : item.fullname}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.foodname || ''} onChange={(e) => handleInputChange(e, 'foodname')}  className='foodnameInp'/>
                                ) : item.foodname}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.price || ''} onChange={(e) => handleInputChange(e, 'price')}  className='priceInp'/>
                                ) : item.price}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.number || ''} onChange={(e) => handleInputChange(e, 'number')}  className='numberInp'/>
                                ) : item.number}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.totalprice || ''} onChange={(e) => handleInputChange(e, 'totalprice')}  className='totalpriceInp'/>
                                ) : item.totalprice}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.phone || ''} onChange={(e) => handleInputChange(e, 'phone')}  className='phoneInp'/>
                                ) : item.phone}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <input type="text" value={editData.comment || ''} onChange={(e) => handleInputChange(e, 'comment')}  className='commentInp'/>
                                ) : item.comment}
                            </td>

                            <td className='editBtn'>
                                {editIndex === index ? (
                                    <i class="bi bi-check-lg" onClick={handleSaveEdit}></i>
                                ) : (
                                    <i className="bi bi-pen" onClick={() => handleEditClick(index, item)}></i>
                                )}
                            </td>
                            <td className='deleteBtn text-danger' onClick={() => dispatch(removeTableUser(tableType, index))}>
                                <i className="bi bi-trash3"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="totalPriceDiv">
                <p>Jami</p>
                <p>{totalPrice} so’m</p>
            </div>
        </TableStyled>
    );
}

