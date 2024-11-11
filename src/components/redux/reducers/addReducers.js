import { CATEGORY_ADD, FOOD_ADD } from "../Actions";

const initialState = {
    category: [],
    foods: [],
};

export const addReducer = (state = initialState, action) => {
  switch(action.type){
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

    default: return state;
  }
}

