import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  state = {
    comments: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3004/comments?postId=`+this.props.postId)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  render() {
    return (
    	<div>
          { this.state.comments.map(comment => <div key={comment.id}>
	      	<blockquote className="blockquote text-right">
			  <p className="mb-0">{comment.body}</p>
			  <footer className="blockquote-footer">{comment.email} <cite title="Source Title">{comment.name}</cite></footer>
			</blockquote>
			</div>)}
      	</div>
    )
  }
}

export default Comment;