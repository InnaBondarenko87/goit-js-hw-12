import axios from 'axios';

const API_KEY = '49743033-5279597e0b6160ec8a63a5c3f';

export async function getImagesByQuery(query, page) {
  return await axios('https://pixabay.com/api/?', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
}
