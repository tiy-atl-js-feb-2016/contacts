import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import Icon from './icon';
import USER_SHAPE from './user_shape';
import users from './user_data';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';

export default class UserDetails extends Component {
  constructor(...props) {
    super(...props);
    this.state = { preview: '', user: {}, loading: true };
  }

  componentWillMount() {
    let { user_id } = this.props.params;
    ajax(`http://10.0.0.24:8026/data/${user_id}`).then(user => {
      this.setState({preview: user.photo, user, loading: false});
    })
  }

  dropHandler([file]) {
    this.setState({preview: file.preview});
  }

  dataHandler(data) {
    //users.push(data);
    let { user_id } = this.props.params;
    let config = {
      url: `http://10.0.0.24:8026/data/${user_id}`,
      type: 'PUT',
      dataType: 'json',
      contentType : 'application/json',
      processData: false,
      data: JSON.stringify(data)
    }
    ajax(config).then(() => {
      hashHistory.push('/');
    })
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  renderForm() {
    // console.log('user name:', this.props.params.user_name);
    // let { user_name } = this.props.params;
    // let user = users.find(currentUser => currentUser.name === user_name);
    let { user } = this.state;
    // var user = this.state.user;

    console.log('got user', user);

    return (
      <div className="edit-user">
        <SSF onData={::this.dataHandler}>
          <div>
            <label>
              Fullname:
              <input type="text" name="name" defaultValue={user.name}/>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email"  defaultValue={user.email}/>
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input type="tel" name="phone"  defaultValue={user.phone}/>
            </label>
          </div>
          <div>
            <label>
              Location:
              <input type="text" name="location"  defaultValue={user.location}/>
            </label>
          </div>
          <div>
            <Dropzone onDrop={::this.dropHandler}>
              Drop Picture Here
              <input type="hidden" name="photo" value={this.state.preview}/>
              <img src={this.state.preview}/>
            </Dropzone>
          </div>
          <button>Submit</button>
        </SSF>
      </div>
    );
  }

  render() {
    let { loading } = this.state;
    return loading ? this.renderLoading() : this.renderForm()
  }
}
