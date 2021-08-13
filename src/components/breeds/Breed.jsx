import React from 'react';

const Breed = ({name, url, origin, lifespan}) => (
    <figure className="flex flex-col gap-2 ">
      <h2 className="text-center font-bold">{name}</h2>
      <img src={url} alt={name} className="h-32 object-contain rounded-md" />
      <figcaption>
        Origin: {origin} <br/>
        LifeSpan: {lifespan} <br/>
      </figcaption>
    </figure>
)

export default Breed;

