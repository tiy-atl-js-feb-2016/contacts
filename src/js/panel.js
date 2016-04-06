import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    let attrs = {...this.props};
    delete attrs.title;
    return (
      <div {...attrs}>
        <h3>{this.props.title}</h3>
        <div>--- Children Below ---</div>
        <div>{this.props.children}</div>
        <div>--- Children Above ---</div>
      </div>
    );
  }
}
