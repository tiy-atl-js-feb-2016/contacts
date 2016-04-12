// Javascript Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
import users from './user_data';
import AddContact from './add_contact';
import { ajax } from 'jquery';
import NProgress from 'react-nprogress';

let renderDetails = (user) => ReactDOM.render(
  <UserDetails user={user} onBack={renderList}/>
  , document.querySelector('.app')
);

let renderList = () => {
  ReactDOM.render(
    <UserList
    users={users}
    onUserSelect={renderDetails}
    onUserRemove={removeAndRender}
    onNew={renderAdd}/>
    , document.querySelector('.app')
  );
}

let addAndRender = (contact) => {
  users.push(contact);
  renderList();
}

let removeAndRender = (contact) => {
  users.splice(users.indexOf(contact), 1);
  // users = users.filter(user => user !== contact);
  renderList();
}

let renderAdd = () => ReactDOM.render(
  <AddContact onAdd={addAndRender}/>
  , document.querySelector('.app')
);

renderList();
