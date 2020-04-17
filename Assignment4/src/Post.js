import React, {Component} from 'react';
import './App.css';
import posts from './constants/posts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    withRouter
} from "react-router-dom";


class Post extends Component {

   createMarkup(text) {
        return {__html: text};
    }



    render() {
        let topicId = this.props.match.params.topicId;
        let post = posts[topicId];
        return (
            <div>
                <h1>{post.title}</h1>
                <div className="post-date">Date of the post: {post.date}</div>
                <div><img src={post.image} width="100%"/></div>
                <div className="post-text" dangerouslySetInnerHTML={this.createMarkup(post.text)}/>
            </div>
        )
    }
}

export default withRouter(Post);
