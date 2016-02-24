import React, { Component } from 'react';
import cn from 'classnames';

export default class FloatLabel extends Component {

  state = {
    isFocused: false,
    value: '',
  };

  onChange() {
    this.setState({
      value: this.refs.input.value,
    });
  }

  handleFocus = () => {
    this.setState({
      isFocused: true,
    });
  };

  handleBlur = () => {
    this.setState({
      isFocused: Boolean(this.refs.input.value.trim()),
    });
  };

  render() {
    const classes = cn('form-group with-icon floated-label', {
      focused: this.state.isFocused,
    });

    return (
      <div className={classes}
        onFocus={this.handleFocus} onBlur={this.handleBlur}
      >
        <label className="control-label">Your draft name here</label>
        <i className="icon icon-left shore-icon-backend-info" />
        <input type="text" ref={this.props.input}
          className="form-control stretched"
          placeholder="Your email subject here"
          value={this.props.value}
        />
      </div>
    );
  }
}
