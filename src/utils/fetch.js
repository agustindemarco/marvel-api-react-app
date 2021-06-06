const BASE_URL = "http://gateway.marvel.com/v1/public";
const authParams = `apikey=${process.env.REACT_APP_API_KEY}`;

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