// constantes
const dataInicial = {
  favourite : []
}


// types
const ADD_FAVOURITE = 'ADD_FAVOURITE'
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
const GET_FAVOURITE = 'GET_FAVOURITE'

// reducer
export default function favouriteReducer (state = dataInicial, action) {
  switch(action.type){
    case ADD_FAVOURITE:
      return {...state, favourite: action.payload}
    case REMOVE_FAVOURITE:
      return {...state, favourite: action.payload}
    case GET_FAVOURITE:
      return {...state}
    default:
      return state
    }
}

export const getFavourite = () => async (dispatch,getState) => {
  dispatch({
    type: GET_FAVOURITE,
  })
}

export const addFavourite = (id) => async (dispatch, getState) => {
  const fav = getState().favourite.favourite
  fav.push(id)
  console.log(fav)
  dispatch({
    type: ADD_FAVOURITE,
    payload: fav
  })
}

export const removeFavourite = (id) => async (dispatch, getState) => {
  const fav = getState().favourite.favourite
  console.log(fav.filter(id))
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: fav
  })
}
