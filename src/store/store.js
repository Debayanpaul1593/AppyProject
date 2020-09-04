import React, {Component} from 'react';
import {createStore, combineReducers} from 'redux';
import flowReducer from '../reducers/flowReducer';

let store = createStore(combineReducers({flowReducer: flowReducer}));
export default store;
