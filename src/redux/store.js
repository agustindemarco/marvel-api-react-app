import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cardReducer from './cardDucks'


const rootReducer = combineReducers({
  characters: cardReducer,
  // comic: comicReducer
  // favorites: favoriteReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
  return store;
}


