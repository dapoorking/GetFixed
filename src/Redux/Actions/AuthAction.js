import {USER} from '../ActionType/ActionType';

export const getUser = data => {
  return {
    type: USER,
    payload: data,
  };
};
