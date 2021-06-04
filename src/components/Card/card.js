import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
};

var Card = ({ name, img, id }) => {
  return (
    <>
      <article>
        <div
          className="image"
          style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
        >
          <a href={`/character/${id}`} className="character">
            {" "}
          </a>
          <p className="char-name">{name}</p>
        </div>
      </article>
    </>
  );
};

Card.propTypes = propTypes;
export default Card;
