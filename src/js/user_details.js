import React, { Component, PropTypes } from 'react';
import Icon from './icon';
import USER_SHAPE from './user_shape';
import users from './user_data';

let user = users[0];

export default class UserDetails extends Component {

  render() {
    return (
      <div className="user-details">
        <div className="avatar">
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
