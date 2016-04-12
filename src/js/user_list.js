import React, { Component, PropTypes } from 'react';
import USER_SHAPE from './user_shape';
import Icon from './icon';
import Panel from './panel';
import users from './user_data';
import { Link } from 'react-router';

export default class UserList extends Component {
  constructor(...args) {
    super(...args);
    this.state = { users };
  }

  getUser(user) {
    return (
      <li key={user.name}>
        <Link to={`/user-details/${user.name}`}>{user.name}</Link>
        <button onClick={() => this.removeUser(user)}>Remove</button>
      </li>
    )
  }

  removeUser(user) {
    users.splice(users.indexOf(user), 1);
    this.setState({users});
  }

  render() {
    let { users } = this.state;
    return (
      <Panel title="User List" className="user-list">
        <Link to="/add-contact">Add Contact</Link>
        <h1>My Peeps</h1>
        <ul>{users.map(::this.getUser)}</ul>
      </Panel>
    );
  }
}
