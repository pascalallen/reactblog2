import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';

class CommentNew extends Component {  
  constructor () {
    super();
    this.state = {
      name: '',
      postId: '',
      email: 'anonymous',
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

    handleSubmit = event => {
      event.preventDefault();

      const comment = {
        name: this.state.name,
        body: this.state.body,
        postId: this.props.postId,
        email: this.state.email
      };

      axios.post(`http://localhost:3004/comments`, comment)
        .then(res => {
        	this.props.alert.show('Comment posted!');
          console.log(res);
          console.log(res.data);
        })
    }

    render() {
      return (
        <div>
          <br/>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="display-4">
            New comment
            </h1>         
          </div>
      </div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={this.handleChange}/>
          <input type="hidden" name="postId" onChange={this.handleChange} value={this.props.postId}/>
          <input type="hidden" name="email" onChange={this.handleChange} value="anonymous"/>
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea type="text" className="form-control" name="body" placeholder="Enter body" onChange={this.handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      )
    }
}

export default withAlert(CommentNew);