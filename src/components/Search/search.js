import React, { useState, useEffect, useRef } from "react";
import "./search.scss";
import { getSearch, loadingState, getCharacters } from '../../redux/card-ducks'
import {useDispatch} from 'react-redux'

function Search() {

  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState("");
  const firstUpdate = useRef(true);
  const WAIT_INTERVAL = 1000;

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timeOutId = setTimeout(() => {
      if (searchTerm !== "") {
        dispatch(loadingState())
        dispatch(getSearch(searchTerm))
      } else {
        dispatch(getCharacters())
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
            placeholder="Buscar"
          />
    </>
  )
}

export default Search