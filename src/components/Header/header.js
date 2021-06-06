import React from "react";
import Search from '../Search/search'
import Favourite from "../Favourite/favourite"
import "./header.scss";
import { getCharacters } from '../../redux/card-ducks'
import {useDispatch} from 'react-redux'

function Header() {

  const dispatch = useDispatch()

  return (
    <>
      <nav>
        <div className="col-1">
          <div className="block" onClick={() => {
            dispatch(getCharacters())
          }}>
            <img className="logo" src="Marvel_Logo.svg" alt="LOGO" />
          </div>
        </div>
        <div className="col-2">
          <Search/>
        </div>
        <div className="col-3">
          <Favourite/>
        </div>
      </nav>
    </>
  );
}

export default Header;
