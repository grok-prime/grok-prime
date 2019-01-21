import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Main from 'containers/Main';

import Welcome from 'components/Welcome';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const Layout = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16} height="100vh">
      <Grid item xs={12}>
        <Grid
          container
          className={classes.demo}
          justify="center"
          alignItems="center"
        >
          <Main>
            <Welcome />
          </Main>
        </Grid>
      </Grid>
    </Grid>
  )
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);