import {Box, Button, Typography, makeStyles} from '@material-ui/core';
import {TITLE as CONSTANTS} from './locales/index';

import CityContainer from './containers/CityContainer/CityContainer';
import {useAppDispatch} from './store/hooks/hooks';
import {toggleAddCityModal} from './store/actions/index';

function App() {
  const classes = makeStyles({
    header: {
      padding: '2rem',
    },
    addCityButtton: {
      margin: '1rem',
    },
  })();

  const dispatch = useAppDispatch();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Typography className={classes.header} color="primary" variant="h3">
        {CONSTANTS.MAIN_TITLE}
      </Typography>
      <Button
        onClick={() => dispatch(toggleAddCityModal())}
        className={classes.addCityButtton}
        variant="contained"
        color="primary"
      >
        Add City
      </Button>
      <CityContainer></CityContainer>
    </Box>
  );
}

export default App;
