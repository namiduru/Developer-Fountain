import { Paper, Typography, CardMedia, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { COLOR } from "../styles/color";

const carStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  carImage: {
    width: "50%",
    height: "100px",
    marginBottom: "0.5rem",
  },
  carTitle: {
    color: COLOR.PRIMARY_COLOR,
    fontSize: "1.2rem",
  },
  description: {
    padding: "1rem",
    fontStyle: "italic",
  },
});

const Car = (props) => {
  const { vehicleType, amount, currency } = props.data;
  const { title, description, images } = vehicleType;

  const styles = carStyles();

  return (
    <Paper className={styles.container} elevation={3}>
      <Typography className={styles.carTitle} color="primary">
        {title}
      </Typography>
      <CardMedia
        component="img"
        className={styles.carImage}
        src={images.x1}
      ></CardMedia>
      <Typography variant="body1">{`Price: ${amount} ${currency}`}</Typography>
      <Typography className={styles.description} variant="body1">
        {description}
      </Typography>
    </Paper>
  );
};

Car.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Car;
