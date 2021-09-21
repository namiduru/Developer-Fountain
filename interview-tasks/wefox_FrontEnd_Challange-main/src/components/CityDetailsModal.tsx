import React from 'react';
import {Modal, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

interface IButtonActions {
  onClose: () => void;
}

interface Data {
  title: string;
  content: string;
  lat: string;
  long: string;
}

interface Props {
  buttonActions: IButtonActions;
  data: Data;
}

const CityDetailsModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{props.data.title}</h2>
      <p id="simple-modal-description">{props.data.content}</p>
      <ul>
        <li>Latitude: {props.data.lat}</li>
        <li>Longitude: {props.data.long}</li>
      </ul>
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

export default CityDetailsModal;
