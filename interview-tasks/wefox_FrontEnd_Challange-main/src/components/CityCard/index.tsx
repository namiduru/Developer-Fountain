import React from 'react';
import {
  Card,
  CardActionArea,
  makeStyles,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

export interface Props {
  id: number;
  title: string;
  content: string;
  image_url: string;
  buttonActions: ICardButtonActions;
}

interface ICardButtonActions {
  showMore: (event: React.MouseEvent<HTMLButtonElement>) => any;
  edit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  delete: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: '1rem',
    marginTop: '0.5rem',
  },
  media: {
    height: 140,
  },
});

const CityCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={props.buttonActions.showMore}
        >
          Show More
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={props.buttonActions.delete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityCard;
