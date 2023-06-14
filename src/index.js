import { api_key, url } from './api';
import { fetchBreeds } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

fetchBreeds(api_key, url)
  .then(data => {
    insertOptions(data);
  })
  .catch(error => {
    console.log(error);
  });

function insertOptions(data) {
  const breeds = data;
  breeds.forEach(breed => {
    breedSelect.insertAdjacentHTML(
      'beforeend',
      `<option value='${breed.id}'>${breed.name}</option>`
    );
  });
}
