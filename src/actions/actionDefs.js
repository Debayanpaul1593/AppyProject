import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_USERNAME_ERR,
  UPDATE_PASSWORD_ERR,
  SELECT_USER,
} from './actionTypes';

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  payload: username,
});

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password,
});

export const updateUsernameError = err => ({
  type: UPDATE_USERNAME_ERR,
  payload: err,
});

export const updatePasswordError = err => ({
  type: UPDATE_PASSWORD_ERR,
  payload: err,
});

export const selectUser = user => ({
  type: SELECT_USER,
  payload: user,
});
