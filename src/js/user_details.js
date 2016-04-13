import React, { Component, PropTypes } from 'react';
import Icon from './icon';
import USER_SHAPE from './user_shape';
import users from './user_data';
import { ajax } from 'jquery';
import { Link } from 'react-router';

export default class UserDetails extends Component {
  constructor(...props) {
    super(...props);
    this.state = { user: {} };
  }

  componentWillMount() {
    let { user_id } = this.props.params;
    ajax(`http://10.0.0.24:8026/data/${user_id}`).then(user => {
      this.setState({user});
    })
  }

  render() {
    // console.log('user name:', this.props.params.user_name);
    // let { user_name } = this.props.params;
    // let user = users.find(currentUser => currentUser.name === user_name);
    let { user } = this.state;
    // var user = this.state.user;

    return (
      <div className="user-details">
        <Link to={`/edit-user/${user._id}`}>Edit</Link>
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
