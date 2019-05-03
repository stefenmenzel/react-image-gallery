import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  }

  componentDidMount(){
    this.getSongs();
  }

  getSongs = () => {

    axios.get('/gallery')
    .then((response) => {
      console.log('response form GET request:', response);
      this.setState({
        gallery: response.data
      })
    }).catch((error) => {
      console.log('error in GET request', error);
    })
  }

  addLike = (idToLike) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
