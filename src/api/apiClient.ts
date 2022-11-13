import axios from 'axios';

const baseURL = 'http://34.118.65.231:3000/api/v1';

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
