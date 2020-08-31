import axios from 'axios';

const booksList = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
});

export default booksList;