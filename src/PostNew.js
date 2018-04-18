import React, { Component } from 'react';
import axios from 'axios';
import App from './App';

class PostNew extends Component {  
	  state = {
	    title: '',
	    body: '',
	  }

	  handleChange = event => {
	    this.setState({ title: event.target.value, body: event.target.value });

	  }

	  handleSubmit = event => {
	    event.preventDefault();

	    const post = {
	      title: this.state.title,
	      body: this.state.body
	    };

	    axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
	      .then(res => {
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

export default PostNew;