import * as ActionTypes from '../actionTypes';

const initialState = {
  cities: [],
  detailModal: {
    isDisplayed: false,
    data: null,
  },
  addCityModal: {
    isDisplayed: false,
    data: {
      title: null,
      content: null,
      lat: null,
      long: null,
      img_url: null,
    },
  },
};

const City = function (state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_ALL_CITIES:
      return {
        ...state,
        cities: action.data,
      };
    case ActionTypes.SET_DETAIL_MODAL:
      return {
        ...state,
        detailModal: action.data,
      };
    case ActionTypes.TOGGLE_ADD_CITY_MODAL:
      return {
        ...state,
        addCityModal: {
          ...state.addCityModal,
          data: {
            title: null,
            content: null,
            lat: null,
            long: null,
            img_url: null,
          },
          isDisplayed: !state.addCityModal.isDisplayed,
        },
      };
    case ActionTypes.SET_ADD_CITY_MODAL:
      return {
        ...state,
        addCityModal: action.data,
      };
    default:
      return state;
  }
};

export default City;
