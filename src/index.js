import { api_key, url, urlImg } from './api';
import { fetchBreeds, fetchCatByBreed } from './cat-api';



const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

error.style.display = 'none';

breedSelect.addEventListener('input', createCatInfoCard);


fetchBreeds(api_key, url)
  .then(data => {
    insertOptions(data);
  })
  .catch(()=> {
    error.style.display = 'initial';
    loader.style.display = 'none';
  });



function insertOptions(data) {
    const breeds = data;
  breeds.forEach(breed => {
        breedSelect.insertAdjacentHTML(
      'beforeend',
      `<option value='${breed.reference_image_id}'>${breed.name}</option>`
    );
    loader.style.display = 'none';
  });
}


function createCatInfoCard(event) {
  loader.style.display = 'initial';
  catInfo.innerHTML = '';
  let breedId = event.target.value;
  fetchCatByBreed(urlImg, api_key, breedId)
    .then(data => {
      createCatInfoMarkup(data);
       })
    .catch(()=> {
        error.style.display = 'initial';
    });
}


function createCatInfoMarkup(data) {
  const catInfoData = data;
  loader.style.display = 'none';
    catInfo.insertAdjacentHTML(
    'afterbegin',
    `<img src="${catInfoData.url}"alt="${catInfoData.breeds[0].name}" width =240><p>${catInfoData.breeds[0].name}</p><p>${catInfoData.breeds[0].description}</p><p>Temperament: ${catInfoData.breeds[0].temperament}</p>`
  );
}
