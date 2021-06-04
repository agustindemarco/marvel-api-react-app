import React, { useState, useEffect, useRef } from "react";
import "./search.scss";
import { getSearch } from '../../redux/cardDucks'
import {useDispatch, useSelector} from 'react-redux'

function Search() {

  const dispatch = useDispatch()
  const characters = useSelector(store => store.characters.array)

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
        //array vacio
        dispatch(getSearch(searchTerm))
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