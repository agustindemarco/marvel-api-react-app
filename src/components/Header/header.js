import React from "react";
import Search from '../Search/search'
import "./header.scss";

function Header() {

  return (
    <>
      <nav>
        <div className="col-1">
          <a href="/">
            <img className="logo" src="Marvel_Logo.svg" alt="LOGO" />
          </a>
        </div>
        <div className="col-2">
          <Search/>
        </div>
        <div className="col-3">
          <a href="/fav">
            <i className="icon-star-empty"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
