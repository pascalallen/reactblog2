import React, { Component } from 'react';
import axios from 'axios';
import App from './App';

class AuthorView extends Component {

  constructor(props) {
    super(props);

    this.state = { user: { title: '' } };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.authorId}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }

  render() {

    const { user } = this.state;

    return (
        <div>
          <App/>
          <br/>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="display-4">
                {user.name}
              </h1>
            </div>
          </div>
          {user.username}
          {user.email}
          <hr/>
        </div>
    )
  }
}

export default AuthorView;