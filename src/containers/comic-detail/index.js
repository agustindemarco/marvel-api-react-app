import React, { useState, useEffect } from "react";
import { getComicById } from "../../utils/fetch";
import { useParams } from "react-router";
import "./style.scss";

const ComicDetail = () => {
  const { id } = useParams();
  const [comic, setComic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComicById(id).then((response) => {
      setComic(response.data[0]);
      setLoading(false);
    });
  }, [id]);

  if (!loading) {
    const roles = ["artist", "writer", "penciler"];
    const creators = comic.creators.items.filter((creator) =>
      roles.includes(creator.role)
    );
    var writer = "";
    var artist = "";
    var penciler = "";
    for (let i = 0; i < creators.length; i++) {
      if (creators[i].role === "writer") {
        writer += " -" + creators[i].name;
      }
      if (creators[i].role === "artist") {
        artist += " -" + creators[i].name;
      }
      if (creators[i].role === "penciler") {
        penciler += " -" + creators[i].name;
      }
    }
  }

  return (
    <>
      <div className="comic-det">
        {loading ? (
          <div>LOADING</div>
        ) : (
          <>
            <div className="comic-image">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="comic-img"
                className="comicImage"
              />
            </div>
            <div className="comic-details">
              <h2>{comic.title}</h2>
              <p>Writer: {writer}</p>
              {penciler === "" ? (
                <p>No penciler</p>
              ) : (
                <p>Penciler: {penciler}</p>
              )}
              {artist === "" ? <p>No Artist</p> : <p>Artist: {artist}</p>}
              <div>{comic.description}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ComicDetail;
