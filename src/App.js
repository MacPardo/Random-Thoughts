import React, {Component} from 'react';
import axios from './axios-random-thoughts';

import firebase from 'firebase';
// import axios from 'axios';
import './App.css';

import Posts from './components/Posts/Posts';
import NewPost from './containers/NewPost/NewPost';

class App extends Component {

  state = {
    posts: []
  }

  snapToArray = (snap) => Object
    .keys(snap)
    .map(key => Object.assign(snap[key], {key: key}));

  componentDidMount() {
    const ref = firebase.database().ref().child('posts');
    ref.on('value', snap => {
      console.log('snap', snap.val());
      console.log('snapToArray', this.snapToArray(snap.val()))
      this.setState({posts: this.snapToArray(snap.val()).reverse()});
    })
  }

  render() {
    console.log(axios);
    axios
      .get('/posts.json')
      .then(res => {
        console.log('SUCCESS!');
        console.log(res);
      })
      .catch(e => {
        console.log('error is', e);
      });
    return (
      <div className="App">
        <NewPost/>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
