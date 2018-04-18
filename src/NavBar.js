import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {  

	  render() {
	    return (
			<div className="col-1 navBar column">
				<a href="/" data-toggle="tooltip" data-placement="bottom" title="Home"><i className="fa fa-star-o fa-2x" aria-hidden="true"></i></a>
				<hr/>
				<a href="/new" data-toggle="tooltip" data-placement="bottom" title="New Post" data-html="true"><i className="fa fa-plus fa-2x nav-icon" aria-hidden="true"></i></a>
			</div>
	    )
	  }
}

export default NavBar;