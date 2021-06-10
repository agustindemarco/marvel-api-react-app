import React, { useState, useEffect } from "react";
import Section from "../../components/Section";
import Comic from "../../components/Comic";
import { getComicsById, getCharacterById } from "../../utils/fetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";

function Comics() {
  const { id } = useParams();
  const [comicsColection, setComics] = useState([]);
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterById(id).then((res) => setName(res.data.results[0].name));
    getComicsById(id).then((response) => {
      setComics(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="grid-container">
      <Section className="modal">
        <div className="head">
          <h1>{name}</h1>
          <Link to="/home">
            <i className="icon-cancel"></i>
          </Link>
        </div>
        <div className="comics-scroll">
          {loading ? (
            <p className="center">LOADING</p>
          ) : comicsColection.length === 0 ? (
            <p className="center">NO RESULTS</p>
          ) : (
            comicsColection.map((comic, i) => (
              <Comic
                comic={comicsColection}
                key={i}
                title={comic.title}
                img={comic.thumbnail}
                id={comic.id}
                description={comic.description}
              />
            ))
          )}
        </div>
      </Section>
    </div>
  );
}

export default Comics;
