import React, { Component, PropTypes } from 'react';
import Icon from './icon';
import USER_SHAPE from './user_shape';
import users from './user_data';

export default class UserDetails extends Component {

  render() {
    console.log('user name:', this.props.params.user_name);
    let { user_name } = this.props.params;
    let user = users.find(currentUser => currentUser.name === user_name);

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
