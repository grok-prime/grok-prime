import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Definition from 'components/Definition';
import { getDefinition } from './userReducer'

export default connect(
  createStructuredSelector({
    definition
  }),
  {
    getDefinition
  })(Definition);
