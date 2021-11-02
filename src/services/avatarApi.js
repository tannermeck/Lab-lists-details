import fetch from 'cross-fetch';

export const fetchAvatar = async () => {
    const url = 'https://last-airbender-api.herokuapp.com/api/v1/characters'
    const retrieve = await fetch(url)
    const characters = await retrieve.json();
    return characters;
}
