import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    let { type, className } = this.props;
    return (
      <i className={classnames('fa', `fa-${type}`, className)}/>
    )
  }
}
