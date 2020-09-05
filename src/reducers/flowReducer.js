import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_USERNAME_ERR,
  UPDATE_PASSWORD_ERR,
  SELECT_USER,
} from '../actions/actionTypes';
const initState = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: '',
  selectedUser: {},
  mUsers: [
    {
      id: 1,
      name: 'test1',
      age: '11',
      gender: 'male',
      email: 'test1@gmail.com',
      phoneNo: '9415346313',
    },
    {
      id: 2,
      name: 'test2',
      age: '12',
      gender: 'male',
      email: 'test2@gmail.com',
      phoneNo: '9415346314',
    },
    {
      id: 3,
      name: 'test3',
      age: '13',
      gender: 'male',
      email: 'test3@gmail.com',
      phoneNo: '9415346315',
    },
    {
      id: 4,
      name: 'test4',
      age: '14',
      gender: 'male',
      email: 'test4@gmail.com',
      phoneNo: '9415346316',
    },
    {
      id: 5,
      name: 'test5',
      age: '15',
      gender: 'male',
      email: 'test5@gmail.com',
      phoneNo: '9415346317',
    },
    {
      id: 6,
      name: 'test6',
      age: '16',
      gender: 'male',
      email: 'test6@gmail.com',
      phoneNo: '9415346318',
    },
  ],
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

    case UPDATE_USERNAME_ERR:
      return {
        ...state,
        usernameError: action.payload,
      };

    case UPDATE_PASSWORD_ERR:
      return {
        ...state,
        passwordError: action.payload,
      };

    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
  }
  return state;
};

export default flowReducer;
