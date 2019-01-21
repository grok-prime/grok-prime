import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from
  '@material-ui/core/Typography';
import Definition from 'components/Definition';
import scenes from 'static/data/tutorial';

const styles = {
  card: {
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
};

const Welcome = props => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Definition />
  )
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);