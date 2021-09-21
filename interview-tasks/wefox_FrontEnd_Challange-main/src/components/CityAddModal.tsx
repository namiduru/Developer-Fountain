import React, {useState} from 'react';
import City from '../services/city/City';
import {
  Modal,
  Button,
  Typography,
  makeStyles,
  TextField,
} from '@material-ui/core';

interface ButtonActions {
  onClose: () => void;
  addCity: (city: City) => void;
}

interface Props {
  buttonActions: ButtonActions;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  },
}));

const CityAddModal: React.FC<Props> = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [imageUrl, setImgUrl] = useState('');

  const [validation, setValidation] = useState({
    title: true,
    content: true,
    lat: true,
    long: true,
    imageUrl: true,
  });

  const handleAddCity = (e: any) => {
    let isValidToSubmit = true;
    if (title.trim().length <= 0) {
      isValidToSubmit = false;
      setValidation((prev) => ({
        ...prev,
        title: false,
      }));
    }
    if (content.trim().length <= 0) {
      isValidToSubmit = false;
      setValidation((prev) => ({
        ...prev,
        content: false,
      }));
    }
    if (lat.trim().length <= 0) {
      isValidToSubmit = false;
      setValidation((prev) => ({
        ...prev,
        lat: false,
      }));
    }
    if (long.trim().length <= 0) {
      isValidToSubmit = false;
      setValidation((prev) => ({
        ...prev,
        long: false,
      }));
    }
    if (imageUrl.trim().length <= 0) {
      isValidToSubmit = false;
      setValidation((prev) => ({
        ...prev,
        imageUrl: false,
      }));
    }

    if (isValidToSubmit) {
      const city = new City(title, content, lat, long, imageUrl);
      props.buttonActions.addCity(city);
      props.buttonActions.onClose();
    }
  };

  const body = (
    <div className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h3" color="primary">
          Add City
        </Typography>
        <TextField
          required
          helperText={!validation.title ? 'Please fill the title' : ''}
          error={!validation.title}
          id="city-title-input"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          helperText={!validation.content ? 'Please fill the content' : ''}
          error={!validation.content}
          id="city-title-content"
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          required
          helperText={!validation.lat ? 'Please fill the latitude' : ''}
          error={!validation.lat}
          id="city-title-lat"
          label="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <TextField
          required
          helperText={!validation.long ? 'Please fill the longitude' : ''}
          error={!validation.long}
          id="city-title-long"
          label="Longitude"
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />
        <TextField
          required
          helperText={!validation.imageUrl ? 'Please fill the image url' : ''}
          error={!validation.imageUrl}
          id="city-title-image-url"
          label="Image Url"
          value={imageUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddCity}>
          Add City
        </Button>
      </form>
    </div>
  );

  return (
    <Modal
      open={true}
      onClose={props.buttonActions.onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default CityAddModal;
