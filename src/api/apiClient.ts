import axios from 'axios';

const baseURL = 'http://164.92.234.7/api/v1';

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
