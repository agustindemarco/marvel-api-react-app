import { getCharactersByName, getRandomCharacters } from "../utils/fetch"

// constantes
const dataInicial = {
  array : [],
  offset: 0,
}

// types
const GET_CHARACTERS = 'GET_CHARACTERS'
const GET_CHARACTERS_BY_NAME = 'GET_CHARACTERS_BY_NAME'
const LOADING_STATE = 'LOADING_STATE'
const ADD_FAVOURITE = 'ADD_FAVOURITE'


// reducer
export default function cardReducer (state = dataInicial, action) {
  switch(action.type){
    case GET_CHARACTERS:
      return {...state, array: action.payload}
    case GET_CHARACTERS_BY_NAME:
      return {...state, array: action.payload}
    case LOADING_STATE:
      return {...state, array: action.payload}
    case ADD_FAVOURITE:
      return {...state, favourite: action.payload}
    default:
      return state
    }
}

// ACCIONES
export const getCharacters = () => async (dispatch, getState) => {
  const res = await getRandomCharacters()
  dispatch({
    type: GET_CHARACTERS,
    payload: res.data.results
  })
}

export const getSearch = (name) => async (dispatch, getState) => {
  const res = await getCharactersByName(name)
  dispatch({
    type: GET_CHARACTERS_BY_NAME,
    payload: res.data.results
  })
}

export const loadingState = () => async (dispatch, getState) => {
  const array = []
  dispatch({
    type: LOADING_STATE,
    payload: array
  })
}