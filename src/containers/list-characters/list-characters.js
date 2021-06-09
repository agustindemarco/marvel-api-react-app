import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Section from "../../components/Section/section";
import { getCharacters } from "../../redux/card-ducks";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";

function ListCharacters() {

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(8)
  const characters = useSelector((store) => store.characters.array);
  const dispatch = useDispatch();

useEffect(() => {
  if (loading) {
    dispatch(getCharacters()).then(setLoading(false));
  }
}, [dispatch, loading]);

const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirtCard = indexOfLastCard - cardsPerPage;
const currentCards = characters.slice(indexOfFirtCard,indexOfLastCard) 

const paginate = (pages) => setCurrentPage(pages)

  return (
    <div>
      <Section className="flex">
        {(loading) ? (
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
      <Pagination cardsPerPage={cardsPerPage} totalCards={characters.length} paginate={paginate}/>
    </div>
  );
}

export default ListCharacters;
