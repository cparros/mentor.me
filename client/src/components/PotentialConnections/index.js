import React from "react";
import './index.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  export default function PotentialConnections() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Potential Connections
        </Typography>
        <Typography variant="body2" component="p">
          list of people.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
      </CardActions>
    </Card>
  );
};