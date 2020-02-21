import React, { Component } from 'react';

class Posts extends Component {
    
    renderTopics(){
        let topics = this.props.associated_topics.map(( topic, index) => {
            return <span className="post-topics" key={index}>{topic}</span>
        })
        return topics;
    }
    
    
    render (){
        return (
        <li className="recent-posts">
            <div className="recent-posts__title">
            {this.props.title}

            </div>
            <div className="recent-posts__topics">
                {this.renderTopics()}
            </div>
        </li>
        )
    }
}

export default Posts
