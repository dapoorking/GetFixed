import {USER} from '../ActionType/ActionType';

const initialState = {
  user: 'customer',
};

export const getUserData = state => state.Reducer.user;

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
  }

  return state;
}
