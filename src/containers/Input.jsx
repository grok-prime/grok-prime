import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveData } from 'actions/data';

// meant to be the main input, powered by the logic engine
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const payload = this.props.data.concat(this.state.value);

    this.props.saveData(payload);

    this.setState({ value: '' });

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Statement:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({ data: state.data })

const mapDispatchToProps = dispatch => bindActionCreators({
  saveData
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
