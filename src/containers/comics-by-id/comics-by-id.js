import React, { useState, useEffect } from "react";
import Section from "../../components/Section/section";
import Comic from "../../components/Comic/comic";
import { getComicsById } from "../../utils/fetch";
import { useParams } from "react-router-dom";
import "./comics-by-id.scss";
import { Link } from "react-router-dom";

function Comics() {
  const { id } = useParams();
  const [comicsColection, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComicsById(id).then((response) => {
      setComics(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <Section className="grid-container">
      <Section className="absolute">
        <div className="contain">
          <h1>PERSONAJE</h1>
          <Link to="/">
            <i className="icon-cancel"></i>
          </Link>
        </div>
        <Section className="scroll">
          {loading ? (
            <p className="center">LOADING</p>
          ) : comicsColection.length === 0 ? (
            <p className="center">NO RESULTS</p>
          ) : (
            comicsColection.map((comic, i) => (
              <Comic
                key={i}
                title={comic.title}
                img={comic.thumbnail}
                id={comic.id}
                description={comic.description}
              />
            ))
          )}
        </Section>
      </Section>
    </Section>
  );
}

export default Comics;
