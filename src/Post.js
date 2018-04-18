import React, { Component } from 'react';
import axios from 'axios';
import App from './App';

class Post extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
    	<div>
        	<App/>
	    	<table className="table table-hover table-sm">
	    		<thead>
	    			<tr>
	    				<th>Thumbnail</th>
	    				<th>Title</th>
	    				<th>Body</th>
	    				<th>User</th>
	    			</tr>
	    		</thead>
	    		<tbody>
		          { this.state.posts.map(post => <tr key={post.id}><td><img src="http://via.placeholder.com/35x35" alt="thumbnail" className="img-thumbnail"/></td><td><a href={'/posts/' + post.id} className="title">{post.title}</a></td><td>{post.body}</td><td>{post.userId}</td></tr>)}
		          </tbody>
	      	</table>
      	</div>
    )
  }
}

export default Post;