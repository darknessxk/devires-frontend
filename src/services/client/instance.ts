import axios from 'axios';
import { BaseUrl } from './config';

export const Instance = axios.create({
  baseURL: BaseUrl,
});
