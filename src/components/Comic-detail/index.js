import React, {useState, useEffect} from 'react'
import Section from '../Section/section';
import './style.scss'
import { getComicById } from '../../utils/fetch';
import { useParams } from 'react-router';

const ComicDetail = () => {

  const { id } = useParams();
  const [comic, setComic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComicById(id).then((response) => {
      setComic(response.data);
      setLoading(false);
    });
  }, [id]);



  return (
    <>
      <Section className="flex fullbody absolute">
        {loading ? <div>LOADING</div> : <>
        <div className="comic-image">
          <img
            src={`${comic[0].thumbnail.path}.${comic[0].thumbnail.extension}`}
            alt="comic-img"
            className="comicImage"
          />
        </div>
        <div className='comic-details'>
          <h2>{comic[0].title}</h2>
          <date>{comic[0].dates.date}</date>
          <p>Writer</p>
          <p>Penciler</p>
          <p>Artist</p>
          <p>{comic[0].description}</p>
        </div> </>}
        
      </Section>
    </>
  );
};

export default ComicDetail