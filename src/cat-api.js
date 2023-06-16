export function fetchBreeds(api_key, url) {
  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchCatByBreed(urlImg, api_key, breedId) {
  return fetch(urlImg + breedId, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
