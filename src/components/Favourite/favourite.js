import React, {useState} from "react";
import "./favourite.scss";
import { getFavourites , getCharacters } from '../../redux/card-ducks'
import {useDispatch} from 'react-redux'


function Favourite() {

  const [star, setStar] = useState("icon-star-empty");
  const [enter, setEnter] = useState(false);

  const dispatch = useDispatch()


  return (
    <>
    <div
            onClick={() => {
              if (!enter) {
                setEnter(true)
                setStar("head icon-star")
                dispatch(getFavourites())
              } else {
                dispatch(getCharacters())
                setStar("head icon-star-empty")
                setEnter(false)
              }
            }}
            className="favIcon"
          >
            <i className={star}></i>
          </div>
    </>
  );
}

export default Favourite;