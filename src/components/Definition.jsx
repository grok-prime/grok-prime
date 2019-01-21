import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Definition = props => {
  const { classes } = props;
  const {
    word, pronunciation, type, definitions, examples, details
  } = definition;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        {
          word &&
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            word of the day: {word}
          </Typography>
        }
        {
          pronunciation &&
          <Typography variant="h5" component="h2">
            {pronunciation.map((syllable, index) => <span key={index}>{index > 0 && bull}{syllable}</span>
            )}
          </Typography>
        }
        {type &
          <Typography className={classes.pos} color="textSecondary">
            {type}
          </Typography>
        }
        {
          definitions && definitions.length > 0 &&
          <Typography component="p">
            {definitions.map((def, ii) => definitions.length > 1 ? ` ${ii + 1}: ${def}` : def)}
            <br />
            {examples.map(example => example)}
          </Typography>
        }
      </CardContent>
      {
        details.length > 0 &&
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      }
    </Card>
  )
};

Definition.propTypes = {
  classes: PropTypes.object.isRequired,
  definition: PropTypes.array.isRequired
};

export default withStyles(styles)(Definition);