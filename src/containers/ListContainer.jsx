import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from 'actions/data';
import Error from 'components/Error';

// container for list of data
class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;
    return (
      data ?
        <ul>{data.map((item, index) =>
          <li key={index}>{item}</li>
        )}</ul>
        : <Error>No Data</Error>
    )
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);