import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  smoothScroll,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input');
const loadMore = document.querySelector('.load-more-hidden, .js-load-more');

let page = 1;
let enteredInput = '';
let totalPages = 0;

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);
hideLoadMoreButton();

async function handleSubmit(event) {
  event.preventDefault();
  enteredInput = searchInput.value.trim();
  page = 1;

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
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(enteredInput, page);

    if (!data.hits || data.hits.length === 0) {
      iziToast.warning({
        position: 'topRight',
        title: 'Warning',
        message: 'Sorry, no images found. Please try another query!',
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / 15);
    createGallery(data.hits);

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error('Error:', error);
  } finally {
    hideLoader();
    searchInput.value = '';
  }
}

async function onLoadMore() {
  page++;
  loadMore.disabled = true;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(enteredInput, page);
    createGallery(data.hits);
    smoothScroll();

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: error.message,
    });
  } finally {
    hideLoader();
    loadMore.disabled = false;
  }
}
