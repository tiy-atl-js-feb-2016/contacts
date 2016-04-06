// Person
// * name
// * email
// * phone
// * location
// * photo

import React, { Component, PropTypes } from 'react';
import Icon from './icon';
import USER_SHAPE from './user_shape';

export default class UserDetails extends Component {
  static propTypes = {
    // The user object we are displaying
    // the details for.
    user: USER_SHAPE.isRequired,

    onBack: PropTypes.func.isRequired
  }

  render() {
    let { user, onBack } = this.props;

    return (
      <div className="user-details">
        <div className="avatar">
          <button onClick={onBack}>
            <Icon type="arrow-left"/>
          </button>
          <img src={user.photo} alt={user.name}/>
        </div>
        <ul className="info">
          <li><Icon type="user"/> {user.name}</li>
          <li><Icon type="envelope"/> {user.email}</li>
          <li><Icon type="mobile"/> {user.phone}</li>
          <li><Icon type="globe"/> {user.location}</li>
        </ul>
      </div>
    );
  }
}
