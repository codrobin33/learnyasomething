import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

import { increment, decrement } from './action.jsx';

class Calculator extends Component {
  up = () => {
    this.props.dispatch(increment());
  }

  down = () => {
    this.props.dispatch(decrement());
  }

  render() {
    return (
      <div>
        {this.props.number}
        <input type="button" onClick={this.up} value='up' />
        <input type="button" onClick={this.down} value='down' />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {number} = state;
  return {
    number
  }
}

export default connect(mapStateToProps)(Calculator);
