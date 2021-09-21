import React from 'react';
import {Box, Typography} from '@material-ui/core';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import {PlaceHolder as CONSTANTS} from '../../locales/';

const NoDataFoundPlaceHolder: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LocationCityTwoToneIcon color="primary"></LocationCityTwoToneIcon>
      <Typography color="textPrimary">{CONSTANTS.NOTHING}</Typography>
      <Typography>{CONSTANTS.YOUR_LIST_IS_EMPTY}</Typography>
    </Box>
  );
};

export default NoDataFoundPlaceHolder;
