import { useState } from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DateAndTime = (props) => {
  const { label, value, setValue } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        autoOk
        ampm={false}
        // disableFuture
        disablePast
        value={value}
        onChange={setValue}
        label={label}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateAndTime;
