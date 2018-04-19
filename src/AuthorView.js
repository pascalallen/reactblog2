import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import GoogleMap from './GoogleMap';


class AuthorView extends Component {

  constructor(props) {
    super(props);

    this.state = { user: { title: '' }, address: { street: '' }, geo: { lat: null, lng: null } };
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/users/${this.props.params.authorId}`)
      .then(({ data: user }) => {
        this.setState({ user });
        this.setState({ address: user.address});
        this.setState({ geo: user.address.geo});
      });
  }

  render() {

    const { user } = this.state;
    const { address } = this.state;
    const { geo } = this.state;
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
	              	<tr>
	              		<td align="left">{address.street} {address.suite}</td>
	              		<td align="left">{address.city} {address.zipcode}</td>
	              	</tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr/>
          <GoogleMap lat={geo.lat} lng={geo.lng} city={address.city}/>
        </div>
    )
  }
}

export default AuthorView;