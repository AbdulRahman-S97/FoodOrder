/*************************************************
 * FoodOrderApp
 * @exports
 * store.js
 * Created by Abdul Rahman on 13/10/2021
 *************************************************/
 'use strict';

 import {createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
 import {persistStore} from 'redux-persist';
 import {createLogger} from 'redux-logger';
 
 import rootReducer from './reducers/index';
 
 const logger = createLogger();
 let middleware;
 if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
   middleware = applyMiddleware(thunk, logger);
 } else {
   middleware = applyMiddleware(thunk);
 }
 export const store = createStore(rootReducer, middleware);
 
 export const persist = persistStore(store);