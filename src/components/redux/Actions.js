export const TOGGLE_ASIDE = 'TOGGLE_ASIDE';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const FOOD_ADD = 'FOOD_ADD';
export const SET_LOGIN = 'SET_LOGIN';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_ITEM = 'EDIT_ITEM';


export const addCategory = (categoryItem) => ({
    type: CATEGORY_ADD,
    payload: categoryItem,
});

export const addFood = (foodItem) => ({
    type: FOOD_ADD,
    payload: foodItem,
});

export const isLoginFunc = (isLogin) => ({
    type: SET_LOGIN,
    payload: isLogin,
});

export const removeTableUser = (tableType, index) => ({
    type: REMOVE_USER,
    payload: {tableType ,index},
});

export const editItem = (tableType, index, data) => ({
    type: EDIT_ITEM,
    payload: {tableType, index, data},
})