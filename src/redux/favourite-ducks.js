// constantes
const dataInicial = {
  favourites : []
}


// types
const ADD_FAVOURITE = 'ADD_FAVOURITE'
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'

// reducer
export default function favouriteReducer (state = dataInicial, action) {
  switch(action.type){
    case ADD_FAVOURITE:
      return {...state, favourite: action.payload}
    case REMOVE_FAVOURITE:
      return {...state, favourite: action.payload}  
    default:
      return state
    }
}

export const addFavourite = (id) => async (dispatch, getState) => {
  const fav = getState().favourite.favourites
  fav.push(id)
  console.log(fav)
  dispatch({
    type: ADD_FAVOURITE,
    payload: fav
  })
}

export const removeFavourite = (id) => async (dispatch, getState) => {
  const fav = getState().favourite.favourites
  console.log(fav.filter(id))
  dispatch({
    payload: fav
  })
}
