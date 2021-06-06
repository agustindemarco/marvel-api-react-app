import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import { addFavourite } from '../../redux/favourite-ducks'
import {useDispatch} from 'react-redux'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
};

const Card = ({ name, img, character }) => {

  const dispatch = useDispatch()

  return (
    <>
      <article>
        <div
          className="image"
          style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
        >
          <a href="/" className="character">
            {" "}
          </a>
          <div onClick={() => {dispatch(addFavourite(character))}} className="favIcon">
            <i  className="icon-star-empty"></i>
          </div>
          <p className="char-name">{name}</p>
        </div>
      </article>
    </>
  );
};

Card.propTypes = propTypes;
export default Card;
