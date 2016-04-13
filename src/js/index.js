// Javascript Entry Point

import React from 'react';
import { render } from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import AddContact from './add_contact';
import { Router, Route, hashHistory } from 'react-router';
import UserEdit from './user_edit';

render((
  <Router history={hashHistory}>
    <Route path="/" component={UserList}/>
    <Route path="/user-details/:user_id" component={UserDetails}/>
    <Route path="/edit-user/:user_id" component={UserEdit}/>
    <Route path="/add-contact" component={AddContact}/>
  </Router>
), document.querySelector('.app'))

// let renderDetails = (user) => ReactDOM.render(
//   <UserDetails user={user} onBack={renderList}/>
//   , document.querySelector('.app')
// );
//
// let renderList = () => {
//   ReactDOM.render(
//     <UserList
//     users={users}
//     onUserSelect={renderDetails}
//     onUserRemove={removeAndRender}
//     onNew={renderAdd}/>
//     , document.querySelector('.app')
//   );
// }
//
// let addAndRender = (contact) => {
//   users.push(contact);
//   renderList();
// }
//
// let removeAndRender = (contact) => {
//   users.splice(users.indexOf(contact), 1);
//   // users = users.filter(user => user !== contact);
//   renderList();
// }
//
// let renderAdd = () => ReactDOM.render(
//   <AddContact onAdd={addAndRender}/>
//   , document.querySelector('.app')
// );
//
// renderList();
