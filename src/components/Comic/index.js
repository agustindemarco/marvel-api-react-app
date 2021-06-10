import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.object,
  description: PropTypes.string,
};

const Comic = ({ title, img, id, description }) => {
  const subdescription = description
    ? description.substr(0, 200) + "..."
    : "No description available";

  return (
    <>
      <Link to={`/comic/${id}`} className="link">
        <div className="comic">
          <div
            className="img-comic"
            style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
          ></div>
          <div className="desc-comic">
            <h4 className="title">{title}</h4>
            <p className="description">{subdescription}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

Comic.propTypes = propTypes;
export default Comic;
