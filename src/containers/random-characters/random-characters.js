import React, { useEffect, useState } from "react";
import { getRandomCharacters } from "../../utils/fetch";
import Card from "../../components/Card/card";
import Section from "../../components/Section/section";

function RandomCharacters() {
  const [randomCha, setRandoms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRandomCharacters()
      .then((response) => setRandoms(response.data.results))
      .then(setLoading(false))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      <Section className="flex">
        {loading ? (
          <div>LOADING</div>
        ) : !error ? (
          randomCha.map((char, i) => (
            <Card key={i} name={char.name} img={char.thumbnail} id={char.id} />
          ))
        ) : (
          <div>ERROR</div>
        )}
      </Section>
    </div>
  );
}

export default RandomCharacters;
