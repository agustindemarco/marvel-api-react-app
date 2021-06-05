import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cardReducer from './card-ducks'
import favouriteReducer from "./favourite-ducks";


const rootReducer = combineReducers({
  characters: cardReducer,
  favourite: favouriteReducer,
  // comic: comicReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
  return store;
}


