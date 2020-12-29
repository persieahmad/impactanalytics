import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    marginTop: 20,
  },
  media: {
    height: '60%',
    width: '60%',
    justifyContent: 'center',
    marginLeft: '20%',
  },
  text: {
    textAlign: 'center',
  },
});

export default function CardMUI({ data }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.name}
          height="20%"
          image={data.Image}
          title={data.name}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
