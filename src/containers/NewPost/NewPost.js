import React, {Component} from 'react';
import axios from '../../axios-random-thoughts';

import './NewPost.css';

export default class extends Component {

  state = {
    title: '',
    content: ''
  }

  titleChangedHandler = (event) => {
    this.setState({title: event.target.value});
  }

  contentChangedHandler = (event) => {
    this.setState({content: event.target.value});
  }

  submitPost = () => {
    if (!this.state.title || !this.state.content) return;
    axios
      .post('/posts.json', {
      title: this.state.title,
      content: this.state.content
    })
      .then(res => {
        console.log('res:', res);
        this.setState({title: '', content: ''});
      })
      .catch(e => {
        console.log('error is', e);
      })
  }

  render() {
    return (
      <div className="NewPost">
        <input
          className="NewPost__title"
          type="text"
          value={this.state.title}
          onChange={this.titleChangedHandler}
          placeholder="Título do post"/>
        <textarea rows="6"
          className="NewPost__content"
          onChange={this.contentChangedHandler}
          value={this.state.content}
          placeholder="Conteúdo do post"/>
        <div className="button button--green" onClick={this.submitPost}>SUBMIT</div>
      </div>
    );
  }
}