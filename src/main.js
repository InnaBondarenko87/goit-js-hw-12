// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const enteredInput = searchInput.value.trim();

  if (!enteredInput) {
    iziToast.warning({
      position: 'topRight',
      title: 'Warning',
      message: 'Please enter a search query',
    });
    searchInput.focus();
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(enteredInput)
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (!response.hits || response.hits.length === 0) {
        iziToast.warning({
          position: 'topRight',
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(response.hits);
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
      console.error('Error:', error);
    })
    .finally(() => {
      hideLoader();
      searchInput.value = '';
    });
}
