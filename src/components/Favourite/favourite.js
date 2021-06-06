import React, {useEffect} from "react";
import "./favourite.scss";
import { getFavourites } from '../../redux/card-ducks'
import {useDispatch, useSelector} from 'react-redux'


function Favourite() {

  const dispatch = useDispatch()
  var fav = useSelector(store => store.favourite.array)


  const getFav = () => {
    dispatch(getFavourites())
  }

  useEffect(() => {
    if (fav!==undefined){
      console.log(fav);
    }
  },[fav]);
  

  return (
    <>
    <div onClick={() => getFav()}>
      <i className="icon-star-empty head"></i>
    </div>
    </>
  );
}

export default Favourite;