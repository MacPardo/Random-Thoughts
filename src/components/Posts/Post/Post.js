import React from 'react';
import './Post.css';

export default (props) => (
  <div className="Post">
    <div className="Post__title">{props.title}</div>
    <div className="Post__content">{props.content}</div>
  </div>
);