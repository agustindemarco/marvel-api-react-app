import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./style.scss";
import { getSearchName, loadingState } from "../../redux/card-ducks";
import { useDispatch } from "react-redux";

function Search() {
  let query = new URLSearchParams(useLocation().search);
  const character = query.get("character");

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(character || "");

  const WAIT_INTERVAL = 1000;

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchTerm !== "") {
        dispatch(loadingState());
        dispatch(getSearchName(searchTerm));
      }
    }, WAIT_INTERVAL);
    return () => clearTimeout(timeOutId);
  }, [dispatch, searchTerm]);

  return (
    <>
      <i className="icon-search"></i>
      <input
        className="searchChar"
        type="text"
        name="Nombre"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
    </>
  );
}

export default Search;
