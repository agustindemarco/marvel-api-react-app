import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./card.scss";
import { addFavourite, removeFavourite } from "../../redux/favourite-ducks";
import { useDispatch, useSelector } from "react-redux";

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
};

const Card = ({ name, img, character, id }) => {
  const [star, setStar] = useState("");
  const [found, setFound] = useState(false);

  const favourite = useSelector((store) => store.favourite.array);
  const dispatch = useDispatch();
  const changeIcon = () => {
    if (favourite.find((element) => element === character) === undefined) {
      setFound(false);
      setStar("icon-star-empty");
    } else {
      setFound(true);
      setStar("icon-star");
    }
  };

  useEffect(() => {
    changeIcon()
  });

  return (
    <>
      <article>
        <div
          className="image"
          style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
        >
          <div onClick={() => {}} className="character">
          </div>
          <div
            onClick={() => {
              if (!found) {
                setStar("icon-star")
                dispatch(addFavourite(character));
              } else {
                setStar("icon-star-empty")
                dispatch(removeFavourite(id))
              }
            }}
            className="favIcon"
          >
            <i className={star}></i>
          </div>
          <p className="char-name">{name}</p>
        </div>
      </article>
    </>
  );
};

Card.propTypes = propTypes;
export default Card;
