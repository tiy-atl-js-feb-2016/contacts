// Javascript Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './user_details';
import UserList from './user_list';
// import users from './user_data';
import AddContact from './add_contact';
import { ajax } from 'jquery';
import NProgress from 'react-nprogress';

let renderDetails = (user) => ReactDOM.render(
  <UserDetails user={user} onBack={renderList}/>
  , document.querySelector('.app')
);

let renderList = () => {
  const url = 'http://localhost:8025/data';

  NProgress.start();

  ajax({url}).then(data => {
    NProgress.done();
    ReactDOM.render(
      <UserList
      users={data}
      onUserSelect={renderDetails}
      onUserRemove={removeAndRender}
      onNew={renderAdd}/>
      , document.querySelector('.app')
    );
  });

}

let addAndRender = (contact) => {
  console.log(' new contact ', contact);

  let data = new FormData();
  data.append('name', contact.name);
  data.append('email', contact.email);
  data.append('location', contact.location);
  data.append('phone', contact.phone);
  data.append('photo', contact.file);

  NProgress.start();

  ajax({
      url: 'http://localhost:8025/upload',
      type: 'POST',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(() => {
      NProgress.done();
      renderList();
    });

  //users.push(contact);
  //renderList();
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
