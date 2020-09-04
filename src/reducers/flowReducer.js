import {UPDATE_USERNAME, UPDATE_PASSWORD} from '../actions/actionTypes';
const initState = {
  username: '',
  password: '',
};

const flowReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
  }
  return state;
};

export default flowReducer;
