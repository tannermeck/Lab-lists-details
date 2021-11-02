import { Creature } from './creature'
import React from 'react';

export const RenderAvatar = ({ avatar }) => {
    const avatars = avatar.map(one => (
        <li key={one._id}>
            <Creature
                name={one.name}
                image={one.photoUrl}
                />
        </li>
    ))
    return <ul>{avatars}</ul>
}