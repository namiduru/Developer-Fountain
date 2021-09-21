import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { debounce, isNull } from "lodash";

const AutoCompleteSearchBox = (props) => {
  const { options, setOptions, textOnChange, setSelectedLocationPlaceID } =
    props;

  // We shouldn't request to server on each input, so debouncing could be good solution for this case.
  const debounceTextOnChange = debounce(
    (value, cb) => textOnChange(value, cb),
    250
  );

  return (
    <Autocomplete
      autoComplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.title}
      style={{ margin: "0 auto", width: 300 }}
      onChange={(e, value) => {
        isNull(value)
          ? setSelectedLocationPlaceID("")
          : setSelectedLocationPlaceID(value.placeId);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Please Select a Pickup Location"
          variant="outlined"
          onChange={(e) => {
            debounceTextOnChange(e.target.value, setOptions);
          }}
        />
      )}
    />
  );
};

export default AutoCompleteSearchBox;
