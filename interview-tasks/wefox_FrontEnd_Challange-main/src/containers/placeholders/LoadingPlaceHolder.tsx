import React from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PlaceHolder as CONSTANTS} from '../../locales/';

const LoadingPlaceHolder: React.FC = () => {
  const classes = makeStyles({
    paddingBottom: {
      paddingBottom: '1rem',
    },
  })();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography className={classes.paddingBottom} color="primary">
        {CONSTANTS.DATA_IS_FETCHING}
      </Typography>
      <CircularProgress />
    </Box>
  );
};

export default LoadingPlaceHolder;
