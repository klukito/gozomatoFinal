import * as api from './api';
import * as parser from './parser';

export const getCityDetails = cityName =>
  api.getCityDetails(cityName).then(({ data }) => parser.parseCityDetails(data));

export const searchRestaurants = cityEntityId =>
  api
    .searchRestaurants(cityEntityId)
    .then(({ data }) => parser.parseSearchRestaurants(data));
