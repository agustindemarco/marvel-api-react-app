// constantes
const dataInicial = {
  array: JSON.parse(localStorage.getItem("my-favourites")) || [],
};

// types
const ADD_FAVOURITE = "ADD_FAVOURITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

// reducer
export default function favouriteReducer(state = dataInicial, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, array: action.payload };
    case REMOVE_FAVOURITE:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

export const addFavourite = (character) => async (dispatch, getState) => {
  const fav = getState().favourite.array;
  fav.push(character);
  dispatch({
    type: ADD_FAVOURITE,
    payload: fav,
  });
};

export const removeFavourite = (id) => async (dispatch, getState) => {
  const fav = getState().favourite.array;
  delFav(fav, id);
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: fav,
  });
};

function delFav(fav, id) {
  for (var i = 0; i < fav.length; i++) {
    if (fav[i].id === id) {
      fav.splice(i, 1);
      break;
    }
  }
}
