import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import users from './user_data';
import { hashHistory } from 'react-router';

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: 'http://fillmurray.com/50/50'
    }
  }

  dropHandler([file]) {
    this.setState({preview: file.preview});
  }

  dataHandler(data) {
    users.push(data);
    hashHistory.push('/');
  }

  render() {
    return (
      <div className="add-contact">
        <SSF onData={this.dataHandler}>
          <div>
            <label>
              Fullname:
              <input type="text" name="name"/>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email"/>
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input type="tel" name="phone"/>
            </label>
          </div>
          <div>
            <label>
              Location:
              <input type="text" name="location"/>
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
    )
  }
}
