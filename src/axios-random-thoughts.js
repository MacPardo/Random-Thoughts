import axios from 'axios';

export default axios.create({
  baseURL: 'https://random-thoughts-b746d.firebaseio.com'
});