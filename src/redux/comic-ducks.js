// constantes
const dataInicial = {
  array: [],
};

// types
const SAVE_COMIC = "SAVE_COMIC";

// reducer
export default function comicReducer(state = dataInicial, action) {
  switch (action.type) {
    case SAVE_COMIC:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

export const saveComic = (comicObject) => async (dispatch, getState) => {
  var comic = getState().comic.array;
  comic.push(comicObject);
  dispatch({
    type: SAVE_COMIC,
    payload: comic,
  });
};