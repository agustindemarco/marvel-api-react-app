import React from "react";
import PropTypes from "prop-types";
import "./comic.scss";

const propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
};

var Comic = ({ title, img, id, description }) => {
  return (
    <>
      <div className="box">
        <a href={`comic/${id}`} className="comic">
          <img
            src={`${img.path}.${img.extension}`}
            alt="comic-img"
            className="comicImage"
          />
          <p className="title">{title}</p>
          <a href="/fav" className="favIcon">
            <i className="icon-star-empty"></i>
          </a>
          <div className="description">
            <p>{description}</p>
          </div>
        </a>
      </div>
    </>
  );
};

Comic.propTypes = propTypes;
export default Comic;
