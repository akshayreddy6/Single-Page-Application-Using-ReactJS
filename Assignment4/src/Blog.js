import React, {Component} from 'react';
import './App.css';
import posts from './constants/posts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                {posts.map((post, index) => {
                    return (
                        <div className="col-md-12 post" key={index}>
                            <h1><Link to={'/post/' + index}>{post.title}</Link></h1>
                            <div className="col-md-12 post-date">Date of the post: {post.date}</div>
                            <div className="col-md-4"><img src={post.image} width="200px"/></div>
                            <div className="col-md-8">{post.summary}</div>
                            <div className="col-md-12"> <hr/></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Blog;
