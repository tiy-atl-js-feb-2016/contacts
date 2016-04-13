import React, { Component, PropTypes } from 'react';
import USER_SHAPE from './user_shape';
import Icon from './icon';
import Panel from './panel';
import { Link } from 'react-router';
import { ajax } from 'jquery';

export default class UserList extends Component {
  constructor(...args) {
    super(...args);
    this.state = { users:[] };
  }

  componentWillMount() {
    ajax('http://10.0.0.24:8026/data').then(users => {
      this.setState({users});
    });
  }

  getUser(user) {
    return (
      <li key={user._id}>
        <Link to={`/user-details/${user._id}`}>{user.name}</Link>
        <button onClick={() => this.removeUser(user)}>Remove</button>
      </li>
    )
  }

  removeUser(user) {
    // users.splice(users.indexOf(user), 1);
    // this.setState({users});

    // ajax({
    //   url: `http://10.0.0.24:8026/data/${user._id}`,
    //   type: 'DELETE'
    // }).then(() => {
    //   ajax('http://10.0.0.24:8026/data').then(users => {
    //     this.setState({users});
    //   });
    // });

    ajax({
      url: `http://10.0.0.24:8026/data/${user._id}`,
      type: 'DELETE'
    })
      .then(() => ajax('http://10.0.0.24:8026/data'))
      .then(users => this.setState({users}))
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
