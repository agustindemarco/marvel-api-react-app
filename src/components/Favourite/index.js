import React, { useState } from "react";
import "./style.scss";
import { getFavourites, getCharacters } from "../../redux/card-ducks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Favourite() {
  const [enter, setEnter] = useState(true);
  const dispatch = useDispatch();

  const func = () => {
    if (enter) {
      setEnter(!enter)
      return getFavourites()
    } else {
      setEnter(!enter)
      return getCharacters()
    }
  }

  return (
    <>
      <div onClick={() => dispatch(func())} className="favIcon">
        <Link to="/home/favorites">
          <i className="icon-star"></i>
        </Link>
      </div>
    </>
  );
}
export default Favourite;
