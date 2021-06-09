import React from "react";
import Search from "../Search";
import Favourite from "../Favourite";
import "./style.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="col-1">
          <Link to="/home" className="block">
            <img className="logo" src="Marvel_Logo.svg" alt="LOGO" />
          </Link>
        </div>
        <div className="col-2">
          <Search />
        </div>
        <div className="col-3">
          <Favourite />
        </div>
      </nav>
    </>
  );
}

export default Header;
