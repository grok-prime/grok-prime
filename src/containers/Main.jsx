import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

const Main = ({ children }) => {
  return (
    <div className="main">
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
