import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import { withAlert } from 'react-alert';

class PostNew extends Component {  
  constructor () {
    super();
    this.state = {
      title: '',
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

      const post = {
        title: this.state.title,
        body: this.state.body
      };

	    axios.post(`http://localhost:3004/posts`, post)
	      .then(res => {
	      	this.props.alert.show('Post created!');
	        console.log(res);
	        console.log(res.data);
	      })
	  }

	  render() {
	    return (
	      <div>
	      	<App/>
	      	<br/>
    		<div className="row h-100 justify-content-center align-items-center">
		    	<div className="text-center">
			    	<h1 className="display-4">
						New Post
			    	</h1>					
		    	</div>
			</div>
	    	<form onSubmit={this.handleSubmit}>
			  <div className="form-group">
			    <label>Title</label>
			    <input type="text" className="form-control" name="title" placeholder="Enter title" onChange={this.handleChange}/>
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

export default withAlert(PostNew);