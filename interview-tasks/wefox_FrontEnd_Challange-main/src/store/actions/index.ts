import * as ActionTypes from '../actionTypes/';
import * as CityService from '../../services/city';
import City from '../../services/city/City';

// Requests
export const fetchCityList = () => {
  return (dispatch: any) => {
    CityService.getListOfCities().then((response) => {
      if (
        response.status === 200 &&
        response.data &&
        response.data.length > 0
      ) {
        dispatch({type: ActionTypes.SET_ALL_CITIES, data: response.data});
      }
    });
  };
};

export const createCity = (city: City) => {
  return (dispatch: any) => {
    CityService.createCity(city).then((resp) => {
      dispatch(fetchCityList());
    });
  };
};

export const updateCity = (id: number, city: City) => {
  return (dispatch: any) => {
    CityService.updateCity(id, city).then(() => {});
  };
};

export const deleteCity = (id: number) => {
  return (dispatch: any, getState: () => any) => {
    CityService.removeCity(id).then(() => {
      const cities = getState().City.cities;
      dispatch({
        type: ActionTypes.SET_ALL_CITIES,
        data: cities.filter((element: any) => element.id !== id),
      });
    });
  };
};

// Detaill Modal
export const showDetailModal = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: ActionTypes.SET_DETAIL_MODAL,
      data: {data: null, isDisplayed: false},
    });

    CityService.getCity(id)
      .then((resp) => {
        dispatch({
          type: ActionTypes.SET_DETAIL_MODAL,
          data: {data: resp.data, isDisplayed: true},
        });
      })
      .catch(() => {
        dispatch({
          type: ActionTypes.SET_DETAIL_MODAL,
          data: {data: null, isDisplayed: false},
        });
      });
  };
};

export const hideDetailModal = () => {
  return (dispatch: any) => {
    dispatch({
      type: ActionTypes.SET_DETAIL_MODAL,
      data: {data: null, isDisplayed: false},
    });
  };
};

// Add City Modal
export const toggleAddCityModal = () => ({
  type: ActionTypes.TOGGLE_ADD_CITY_MODAL,
});
