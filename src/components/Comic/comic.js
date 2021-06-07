import React from "react";
import PropTypes from "prop-types";
import "./comic.scss";

const propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
};

const Comic = ({ title, img, id, description }) => {
  return (
    <>
      <div className="box">
        <div className="space flex">
          <img
            src={`${img.path}.${img.extension}`}
            alt="comic-img"
            className="comicImage"
          />
        </div>  
          <p className="title">{title}</p>
          <div className="description">
            <p>{description}</p>
          </div>
      </div>
    </>
  );
};

Comic.propTypes = propTypes;
export default Comic
