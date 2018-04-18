import React, { Component } from 'react';
import axios from 'axios';

class AuthorLink extends Component {

  constructor(props) {
    super(props);

    this.state = { user: { title: '' } };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }

  render() {

  	const { user } = this.state;

    return (
        <div>
        	<a href={"/authors/" + this.props.authorId}>{user.username}</a>
        </div>
    )
  }
}

export default AuthorLink;