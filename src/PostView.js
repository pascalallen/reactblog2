import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import Comment from './Comment';
import AuthorLink from './AuthorLink';

class PostView extends Component {

  constructor(props) {
  	super(props);

  	this.state = { post: { title: '' } };
  }

	componentDidMount() {

	  axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
	    .then(({ data: post }) => {
	      this.setState({ post });
	    });
	}

	  render() {

	  	const { post } = this.state;

	    return (
	    	<div>
	    		<App/>
	    		<br/>
	    		<div className="row h-100 justify-content-center align-items-center">
			    	<div className="text-center">
	    				<img src="http://via.placeholder.com/250x250" alt="thumbnail" className="img"/>
				    	<h1 className="display-4">
	    					{post.title}
				    	</h1>
				    	By <AuthorLink authorId="1"/>
			    	</div>
	    		</div>
	    		{post.body}
	    		<hr/>
	    		<Comment postId={this.props.params.postId} />
	      	</div>
	    )
	  }

}

export default PostView;