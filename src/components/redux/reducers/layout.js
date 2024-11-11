import { EDIT_ITEM, REMOVE_USER, SET_LOGIN, TOGGLE_ASIDE } from "../Actions";

const initialState = {
    isVisible: true,
    isLogin: JSON.parse(localStorage.getItem('islogin')) || false,

    userTableData: JSON.parse(localStorage.getItem('userTableData')) || [
      { fullname: 'Abdulaziz Ochilov', phone: '+998 97 888 10 27', role: 'admin' },
      { fullname: 'Ergashev Islom', phone: '+998 97 888 12 35', role: 'yetkazuvchi' },
      { fullname: 'Samidullayev Bahodir', phone: '+998 93 234 10 23', role: 'foydalanuvchi' },
      { fullname: 'To’ramurodov Shoislom', phone: '+998 90 375 67 15', role: 'foydalanuvchi' },
    ],
    petitionTableData: JSON.parse(localStorage.getItem('petitionTableData')) || [
      {fullname: 'Abdulaziz Ochilov', foodname: 'Osh', price: '20 000', number: '2', totalprice: '40 000', phone: '+998 97 888 10 27', comment: 'Lorem ipsum'},
      {fullname: 'Ergashev Islom', foodname: 'Osh', price: '20 000', number: '1', totalprice: '20 000', phone: '+998 97 888 12 35', comment: '...'},
      {fullname: 'Samidullayev Bahodir', foodname: 'Manti', price: '5 000', number: '10', totalprice: '50 000', phone: '+998 93 234 10 23', comment: '...'},
      {fullname: 'To’ramurodov Shoislom', foodname: 'Big Lavash', price: '24 000', number: '3', totalprice: '72 000', phone: '+998 90 375 67 15', comment: '...'},
    ],
    deliveredTableData: JSON.parse(localStorage.getItem('deliveredTableData')) || [
      {fullname: 'Abdulaziz Ochilov', foodname: 'Osh', price: '20 000', number: '2', totalprice: '40 000', phone: '+998 97 888 10 27', comment: 'yetkazilgan'},
      {fullname: 'Ergashev Islom', foodname: 'Osh', price: '20 000', number: '1', totalprice: '20 000', phone: '+998 97 888 12 35', comment: 'yetkazilgan'},
      {fullname: 'Samidullayev Bahodir', foodname: 'Manti', price: '5 000', number: '10', totalprice: '50 000', phone: '+998 93 234 10 23', comment: 'yetkazilgan'},
      {fullname: 'To’ramurodov Shoislom', foodname: 'Big Lavash', price: '24 000', number: '3', totalprice: '72 000', phone: '+998 90 375 67 15', comment: 'yetkazilgan'},
    ],
};

export const layoutReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_ASIDE:
        return{
            ...state,
            isVisible: !state.isVisible,
        };
    case SET_LOGIN:
      return {
        ...state,
        isLogin: action.payload,        
      };
    case REMOVE_USER:
      const {tableType, index} = action.payload;

      const updateTableData = [...state[tableType]];
      updateTableData.splice(index, 1);

      return {
        ...state,
        [tableType]: updateTableData,
      };
    case EDIT_ITEM: 
      const {tableType: editTableType, index: editIndex, data} = action.payload;
      const editedTableData = [...state[editTableType]];
      editedTableData[editIndex] = {...editedTableData[editIndex], ...data};
      localStorage.setItem(editTableType, JSON.stringify(editedTableData))

      return{
        ...state,
        [editTableType]: editedTableData,
      }

    default: return state;
  }
}

