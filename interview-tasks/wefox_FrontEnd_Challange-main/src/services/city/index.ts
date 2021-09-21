import axios from 'axios';
import City from './City';

const POSTS_SERVICE: string = 'http://localhost:3000/api/v1/posts';

const getListOfCities = () => axios.get(POSTS_SERVICE);
const getCity = (id: number) => axios.get(`${POSTS_SERVICE}/${id}`);
const createCity = (city: City) => axios.post(`${POSTS_SERVICE}`, city.getCity());
const updateCity = (id: number, city: City) => axios.put(`${POSTS_SERVICE}/${id}`, city.getCity());
const removeCity = (id: number) => axios.delete(`${POSTS_SERVICE}/${id}`);

export {getListOfCities, getCity, createCity, updateCity, removeCity};
