import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  makeStyles,
  Divider,
  Button,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";
import { COLOR } from "../styles/color";

// Components
import Autocomplete from "../components/AutoCompleteSeachBox";
import DateAndTime from "../components/DateAndTime";
import RadioButton from "../components/RadioButton";
import Car from "../components/Car";

// I didin't make redux connection because for this application could be overkill.
import data from "../data/data";
import { getLocations, getOffers } from "../api/api";
import moment from "moment";

import driver from "../resources/driver.jpg";

const sightseeingStyle = makeStyles({
  headerText: {
    color: COLOR.PRIMARY_COLOR,
    fontWeight: "500",
    marginBottom: "1rem",
  },
  container: {
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
    maxWidth: "750px",
    maxHeight: "880px",

    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    overflowY: "auto",
  },
  carContainer: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    height: "300px",
  },
  banner: {
    width: "100%",
    height: "200px",
    opacity: "0.8",
    borderRadius: "8px",
  },
});

const renderHeader = () => {
  const styles = sightseeingStyle();

  return (
    <Box>
      <Typography className={styles.headerText} variant="h5">
        Sightseeing Tours By Sixt Chauffeured Services
      </Typography>
      <CardMedia className={styles.banner} image={driver}></CardMedia>
    </Box>
  );
};

const Sightseeing = () => {
  const styles = sightseeingStyle();

  // I didin't use Redux for managing states...
  const [selectedLocationPlaceID, setSelectedLocationPlaceID] = useState("");
  const [locations, setLocations] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState(2);
  const [offers, setOffers] = useState([]);

  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "An error occured during reservation!"
  );
  const [isFetching, setIsFetching] = useState(false);

  // Location Initial Call...
  useEffect(() => {
    getLocations(" ", setLocations);
  }, []);

  return (
    <Box className={styles.container} border={1} borderRadius={16} p={4}>
      {renderHeader()}
      <Divider></Divider>
      <Autocomplete
        options={locations}
        setOptions={setLocations}
        setSelectedLocationPlaceID={setSelectedLocationPlaceID}
        textOnChange={getLocations}
      ></Autocomplete>
      <Divider></Divider>
      <Box display="flex" justifyContent="space-around">
        <DateAndTime
          label="Select start date"
          value={startDate}
          setValue={setStartDate}
        ></DateAndTime>
      </Box>
      <RadioButton
        value={duration}
        options={data.radioButtonData}
        handleChange={(e) => setDuration(+e.target.value)}
      ></RadioButton>
      <Divider></Divider>
      <Box>
        {isFetching ? (
          <CircularProgress></CircularProgress>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Hello World");
              setIsFetching(true);

              getOffers(
                {
                  originPlaceId: selectedLocationPlaceID,
                  selectedStartDate: moment(startDate).format(),
                  duration: (duration * 60).toString(),
                },
                setOffers,
                setIsErrorDisplayed,
                setErrorMessage,
                setIsFetching
              );
            }}
          >
            Search
          </Button>
        )}
      </Box>

      <Divider></Divider>
      {offers.length !== 0 && (
        <Box className={styles.carContainer}>
          {offers.map((element) => (
            <Car data={element}></Car>
          ))}
        </Box>
      )}

      {isErrorDisplayed && (
        <Typography color="error">{errorMessage}</Typography>
      )}
    </Box>
  );
};

export default Sightseeing;
