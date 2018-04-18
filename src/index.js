import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Post from './Post';
import PostView from './PostView';
import PostNew from './PostNew';
import AuthorView from './AuthorView';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router, Route } from "react-router";
import 'font-awesome/css/font-awesome.min.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

ReactDOM.render(<NavBar/>, document.getElementById('navbar'));
ReactDOM.render(<AlertProvider template={AlertTemplate}>
	<Router history={browserHistory}>
        <Route path="/" component={Post}/>
        <Route path="/new" component={PostNew}/>
        <Route path="/posts/:postId" component={PostView}/>
        <Route path="/authors/:authorId" component={AuthorView}/>
    </Router></AlertProvider>, 
	document.getElementById('root')
);
registerServiceWorker();