import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class AddContact extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      preview: 'http://fillmurray.com/50/50'
    }
  }

  dropHandler([file]) {
    this.setState({preview: file.preview});
    this.file = file;
  }

  dataHandler(data) {
    data.file = this.file;
    this.props.onAdd(data);
  }

  render() {
    let { onAdd } = this.props;
    return (
      <div className="add-contact">
        <SSF onData={::this.dataHandler}>
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
              <img src={this.state.preview}/>
            </Dropzone>
          </div>
          <button>Submit</button>
        </SSF>
      </div>
    )
  }
}
