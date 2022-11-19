import axios from 'axios';

const baseURL = 'http://161.35.196.53/api/v1';

export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
