import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import PostView from './PostView';
import PostNew from './PostNew';
import AuthorView from './AuthorView';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router, Route } from "react-router";


ReactDOM.render(
	<Router history={browserHistory}>
        <Route path="/" component={Post}/>
        <Route path="/new" component={PostNew}/>
        <Route path="/posts/:postId" component={PostView}/>
        <Route path="/authors/:authorId" component={AuthorView}/>
    </Router>, 
	document.getElementById('root')
);
registerServiceWorker();