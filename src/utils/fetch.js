const BASE_URL = "http://gateway.marvel.com/v1/public";
const PUBLIC_KEY = "93778d90c5e0b16c0120e6614a6804ef";
const authParams = `apikey=${PUBLIC_KEY}`;

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getData(addURL, auth) {
  return fetch(`${BASE_URL}/${addURL}?${auth}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export function getRandomCharacters() {
  var offset = getRandomInt(0, 1473);
  return getData(
    "characters",
    `orderBy=modified&limit=8&offset=${offset}&${authParams}`
  ).then((response) => {
    return {
      data: response.data,
    };
  });
}

export function getCharacterById(id) {
  return getData(`characters/${id}`, authParams).then((response) => {
    return {
      data: response.data,
    };
  });
}

export function getCharactersByName(name) {
  return getData("characters", `nameStartsWith=${name}&${authParams}`).then(
    (response) => {
      return {
        data: response.data,
      };
    }
  );
}