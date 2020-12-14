import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Car } from '../../../General/Models/Car';

type CarItemCardProps = {
  carItem?: Car;
};

const IMAGES_CDN = process.env.REACT_APP_RENTAL_CAR_CDN_URL;

export const CarItemCard = ({carItem}: CarItemCardProps) => {
  let carTitle = carItem?.brand + " - " + carItem?.model;

  return <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={carTitle}
        height="180"
        image={`${IMAGES_CDN}/${carItem?.imageId}`}
        title={carTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {carTitle}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {"$900.00 por día"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {carItem?.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">Go to rent</Button>
      <Button size="small" color="primary">More details</Button>
    </CardActions>
  </Card>;
};