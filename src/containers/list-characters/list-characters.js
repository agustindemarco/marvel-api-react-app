import React, { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Section from "../../components/Section/section";
import { getCharacters } from '../../redux/cardDucks'
import {useDispatch, useSelector} from 'react-redux'


function ListCharacters() {

  const dispatch = useDispatch()
  const characters = useSelector(store => store.characters.array)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCharacters()).then(setLoading(false))
  },[dispatch]);

  return (
    <div>
      <Section className="flex">
        {loading ? (
          <div>LOADING</div>
        ) :  (
          characters.map((char, i) => (
            <Card key={i} name={char.name} img={char.thumbnail} id={char.id} />
          ))
        ) }
      </Section>
    </div>
  );
}

export default ListCharacters;
