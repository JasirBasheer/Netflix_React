import axios from 'axios'
import { baseUrl } from './constants/constants.ts';

const instance = axios.create({
    baseURL: baseUrl,
  });
  
export default instance