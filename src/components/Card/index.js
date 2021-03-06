import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { addFavourite, removeFavourite } from "../../redux/favourite-ducks";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
  character: PropTypes.object,
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
    changeIcon();
  });

  return (
    <>
      <article>
        <div
          className="image"
          style={{ backgroundImage: `url(${img.path}.${img.extension})` }}
        >
          <Link to={`/home/comics/${id}`} className="character"></Link>
          <div
            onClick={() => {
              if (!found) {
                setStar("icon-star");
                dispatch(addFavourite(character));
              } else {
                setStar("icon-star-empty");
                dispatch(removeFavourite(id));
              }
              localStorage.setItem("my-favourites", JSON.stringify(favourite));
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
