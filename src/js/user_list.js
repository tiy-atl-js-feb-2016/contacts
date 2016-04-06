import React, { Component, PropTypes } from 'react';
import USER_SHAPE from './user_shape';
import Icon from './icon';
import Panel from './panel';

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(USER_SHAPE).isRequired,

    // users: PropTypes.array.isRequired

    onUserSelect: PropTypes.func.isRequired,
    onUserRemove: PropTypes.func.isRequired,

    onNew: PropTypes.func.isRequired
  }

  getUser(user) {
    let { onUserSelect, onUserRemove } = this.props;
    return (
      <li key={user.name}>
        <span onClick={onUserSelect.bind(null, user)}>{user.name}</span>
        <button onClick={() => onUserRemove(user)}>Remove</button>
      </li>
    )
  }

  // userClickHandler(user, {target: {tagName}}) {
  //   let { onUserSelect, onUserRemove } = this.props;
  //   let method = ['button', 'i'].indexOf(tagName) >= 0
  //     ? onUserRemove
  //     : onUserSelect;
  //   method(user);
  // }
  //
  // getUser(user) {
  //   return (
  //     <li key={user.name} onClick={this.userClickHandler.bind(this, user)}>
  //       <span><Icon type="user"/> {user.name}</span>
  //       <button className="remove">
  //         <Icon type="remove" className="remove"/>
  //       </button>
  //     </li>
  //   )
  // }

  render() {
    let { users, onUserSelect, onNew } = this.props;

    return (
      <Panel title="User List" className="user-list">
        <button onClick={onNew}>Add Contact</button>
        <h1>My Peeps</h1>
        <ul>{users.map(::this.getUser)}</ul>
      </Panel>
    );
  }
}
