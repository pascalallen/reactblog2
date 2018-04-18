import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import AuthorLink from './AuthorLink';
import EllipsisText  from 'react-ellipsis-text';

class Post extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/posts`)
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
		          { this.state.posts.map(post => <tr key={post.id}><td><img src="http://via.placeholder.com/35x35" alt="thumbnail" className="img-thumbnail"/></td><td><a href={'/posts/' + post.id} className="title"><EllipsisText text={(post.title ? post.title:'')} length={18} /></a></td><td><EllipsisText text={(post.body ? post.body:'')} length={33} /></td><td><AuthorLink authorId={post.userId}/></td></tr>)}
		          </tbody>
	      	</table>
      	</div>
    )
  }
}

export default Post;