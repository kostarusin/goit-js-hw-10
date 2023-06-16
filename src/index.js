import { api_key, url, urlImg } from './api';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

error.style.display = 'none';
breedSelect.style.display = 'none';
loader.style.display = 'block';

breedSelect.addEventListener('input', createCatInfoCard);

fetchBreeds(api_key, url)
  .then(data => {
    insertOptions(data);
  })
  .catch(() => {
    error.style.display = 'block';
    loader.style.display = 'none';
    breedSelect.style.display = 'none';
  });

function insertOptions(data) {
  loader.style.display = 'none';
  const breeds = data;
  breedSelect.style.display = 'block';
  breeds.forEach(breed => {
    breedSelect.insertAdjacentHTML(
      'beforeend',
      `<option value='${breed.reference_image_id}'>${breed.name}</option>`
    );
  });
}

function createCatInfoCard(event) {
  loader.style.display = 'block';
  catInfo.innerHTML = '';
  let breedId = event.target.value;
  fetchCatByBreed(urlImg, api_key, breedId)
    .then(data => {
      createCatInfoMarkup(data);
    })
    .catch(() => {
      error.style.display = 'block';
      loader.style.display = 'none';
    });
}

function createCatInfoMarkup(data) {
  const catInfoData = data;
  loader.style.display = 'none';
  catInfo.insertAdjacentHTML(
    'afterbegin',
    `<img src="${catInfoData.url}"alt="${catInfoData.breeds[0].name}" width =240><div class="description-container"><p class="name">${catInfoData.breeds[0].name}</p><p>${catInfoData.breeds[0].description}</p><p><span class="temperament">Temperament:</span> ${catInfoData.breeds[0].temperament}</p></div>`
  );
}
