import {
  getCharactersByName,
  getRandomCharacters,
  getCharacterById,
} from "../utils/fetch";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
  length: 0,
};

// types
const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_BY_NAME = "GET_CHARACTERS_BY_NAME";
const GET_CHARACTERS_BY_ID = "GET_CHARACTERS_BY_ID";
const GET_FAVOURITES = "GET_FAVOURITES";
const LOADING_STATE = "LOADING_STATE";

// reducer
export default function cardReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        array: action.payload.data.results,
        length: action.payload.data.count,
      };
    case GET_CHARACTERS_BY_NAME:
      return { ...state, array: action.payload };
    case GET_CHARACTERS_BY_ID:
      return { ...state, array: action.payload };
    case GET_FAVOURITES:
      return { ...state, array: action.payload };
    case LOADING_STATE:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

// ACCIONES
export const getCharacters = () => async (dispatch) => {
  const res = await getRandomCharacters();
  dispatch({
    type: GET_CHARACTERS,
    payload: res,
  });
};

export const getSearchName = (name) => async (dispatch) => {
  var res = [];
  res = await getCharactersByName(name);
  dispatch({
    type: GET_CHARACTERS_BY_NAME,
    payload: res.data.results,
  });
};

export const getSearchId = (id) => async (dispatch) => {
  const res = await getCharacterById(id);
  dispatch({
    type: GET_CHARACTERS_BY_ID,
    payload: res.data.results,
  });
};

export const getFavourites = () => (dispatch, getState) => {
  const res = getState().favourite.array;
  dispatch({
    type: GET_FAVOURITES,
    payload: res,
  });
};

export const loadingState = () => async (dispatch) => {
  const array = [];
  dispatch({
    type: LOADING_STATE,
    payload: array,
  });
};
