import React from 'react';
import Post from './Post/Post';

export default (props) => props
  .posts
  .map(post => <Post key={post.key} title={post.title} content={post.content}/>)