import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Pagination from "../../components/Pagination";
import { getCharacters } from "../../redux/card-ducks";
import { useDispatch, useSelector } from "react-redux";

const cardsPerPage = 8;

function ListCharacters() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const characters = useSelector((store) => store.characters.array);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirtCard = indexOfLastCard - cardsPerPage;
  const currentCards = characters.slice(indexOfFirtCard, indexOfLastCard);
  const paginate = (pages) => setCurrentPage(pages);

  useEffect(() => {
    dispatch(getCharacters()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [characters]);

  return (
    <div>
      <Section className="flex">
        {loading ? (
          <div className="center">LOADING</div>
        ) : characters.length === 0 ? (
          <div className="center">No results</div>
        ) : (
          currentCards.map((char, i) => (
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
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={characters.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ListCharacters;
