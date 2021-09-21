import React, {useEffect} from 'react';
import {Box} from '@material-ui/core';

import CityCard, {Props} from '../../components/CityCard/';
import CityDetailsModal from '../../components/CityDetailsModal';
import CityAddModal from '../../components/CityAddModal';
import City from '../../services/city/City';

import * as Actions from '../../store/actions/';
// import NoDataFoundPlaceHolder from 'placeholders/NoDataFoundPlaceHolder';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';

const CityContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const cityState = useAppSelector((state) => state.City);

  useEffect(() => {
    dispatch(Actions.fetchCityList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {cityState.detailModal.isDisplayed && (
        <CityDetailsModal
          data={cityState.detailModal.data}
          buttonActions={{
            onClose: () => dispatch(Actions.hideDetailModal()),
          }}
        ></CityDetailsModal>
      )}
      {cityState.addCityModal.isDisplayed && (
        <CityAddModal
          buttonActions={{
            addCity: (city: City) => dispatch(Actions.createCity(city)),
            onClose: () => dispatch(Actions.toggleAddCityModal()),
          }}
        ></CityAddModal>
      )}
      <Box>
        <Box display="flex" flexWrap="wrap">
          {cityState.cities.length > 0 &&
            cityState.cities.map((city: Props) => {
              return (
                <CityCard
                  id={city.id}
                  title={city.title}
                  content={city.content}
                  image_url={city.image_url}
                  buttonActions={{
                    showMore: () => dispatch(Actions.showDetailModal(city.id)),
                    edit: () => {
                      console.log('asd');
                    },
                    delete: () => dispatch(Actions.deleteCity(city.id)),
                  }}
                ></CityCard>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default CityContainer;
