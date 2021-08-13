import React from 'react';

const Breed = ({name, url, origin, lifespan}) => (
    <figure>
      <h2>{name}</h2>
      <img src={url} alt={name} />
      <figcaption>
        Origin: {origin} <br/>
        LifeSpan: {lifespan} <br/>
      </figcaption>
    </figure>
)

export default Breed;
