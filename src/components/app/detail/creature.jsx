import React from 'react';

export const Creature = ({ name, image }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            <p>{name}</p>
        </figcaption>
    </figure>
)