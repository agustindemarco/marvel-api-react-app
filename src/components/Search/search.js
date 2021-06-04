import React, { useState, useEffect, useRef } from "react";
import { getCharactersByName } from "../../utils/fetch";
import "./search.scss";

function Search() {

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
        getCharactersByName(searchTerm)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
    }, WAIT_INTERVAL);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

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