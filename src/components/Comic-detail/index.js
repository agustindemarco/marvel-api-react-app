import React from 'react'
import Section from '../Section/section';
import './style.scss'

const ComicDetail = ({ title, img, id, description }) => {
  return (
    <>
      <Section className="flex fullbody absolute">
        <div className="comic-image">
          <img
            // src={`${img.path}.${img.extension}`}
            alt="comic-img"
            className="comicImage"
          />
        </div>
        <div className='comic-details'>
          <h2>{title}</h2>
          <p>Published</p>
          <p>Writer</p>
          <p>Penciler</p>
          <p>Artist</p>
          <p>{description}</p>
        </div>
      </Section>
    </>
  );
};

export default ComicDetail