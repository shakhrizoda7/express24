import { CATEGORY_ADD, FOOD_ADD, IS_LOGIN, SET_LOGIN, TOGGLE_ASIDE } from './Actions';

const initialState = {
    isVisible: false,
    category: [],
    foods: [],
    isLogin: false,
};

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
})


export const Reducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_ASIDE:
        return{
            ...state,
            isVisible: !state.isVisible,
        };
    case CATEGORY_ADD:
      return{
        ...state,
        category: [...state.category, action.payload]
      }
    case FOOD_ADD:
      return{
        ...state,
        foods: [...state.foods, action.payload]
      }
    case SET_LOGIN:
      return {
        ...state,
        isLogin: action.payload,        
      };

    default: return state;
  }
}

