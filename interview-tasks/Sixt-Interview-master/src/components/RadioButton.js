import PropTypes from "prop-types";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const radioButtonStyle = makeStyles({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});

const RadioButton = (props) => {
  const { value, options, handleChange } = props;
  const styles = radioButtonStyle();

  return (
    <RadioGroup
      className={styles.radioGroup}
      aria-label="gender"
      name="gender1"
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => {
        const { value, label } = option;
        return (
          <FormControlLabel
            value={value}
            label={label}
            control={<Radio color="primary" />}
          ></FormControlLabel>
        );
      })}
    </RadioGroup>
  );
};

RadioButton.propTypes = {
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
};

export default RadioButton;
