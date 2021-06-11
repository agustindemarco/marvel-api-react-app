import React from "react";
import "./style.scss";
import { getFavourites } from "../../redux/card-ducks";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Favourite() {
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="favIcon">
        <Link to="/home" onClick={() => dispatch(getFavourites())}>
          <i className="icon-star"></i>
        </Link>
      </div>
    </>
  );
}
export default Favourite;
