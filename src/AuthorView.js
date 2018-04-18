import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import GoogleMap from './GoogleMap';


class AuthorView extends Component {

  constructor(props) {
    super(props);

    this.state = { user: { title: '' } };
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/users/${this.props.params.authorId}`)
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
              <table className="table table-sm">
              	<tbody>
	              	<tr>
	              		<td align="left">{user.username}</td>
	              		<td align="left">{user.email}</td>
	              	</tr>
	              	<tr>
	              		<td align="left">{user.phone}</td>
	              		<td align="left">{user.website}</td>
	              	</tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr/>
          <GoogleMap/>
        </div>
    )
  }
}

export default AuthorView;