import React, { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Section from "../../components/Section/section";
import { getCharacters } from "../../redux/card-ducks";
import { useDispatch, useSelector } from "react-redux";

function ListCharacters() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const characters = useSelector((store) => store.characters.array);


  useEffect(() => {
    if (loading) {
      dispatch(getCharacters()).then(setLoading(false));
    }
  }, [dispatch, loading]);

  return (
    <div>
      <Section className="flex">
        {(loading) ? (
          <div>LOADING</div>
        ) : characters.lenght === 0 ? (
          <div>No results</div>
        ) : (
          characters.map((char, i) => (
            <Card
              key={i}
              name={char.name}
              img={char.thumbnail}
              character={char}
              id={char.id}
            />
          ))
        )}
      </Section>
    </div>
  );
}

export default ListCharacters;
