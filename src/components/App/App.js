import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js';
import GalleryForm from '../GalleryForm/GalleryForm.js';

class App extends Component {

  state = {
    gallery: []
  }

  componentDidMount(){
    this.getPics();
  }

  getPics = () => {

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

  addPhoto = (newPhoto) => {
    axios.post('/gallery', newPhoto)
    .then((response) => {
      console.log('response from POST request:', response);
      this.getPics();
    }).catch((error) => {
      console.log('Error in POST request:', error);
    });
  }

  deletePhoto = (idToDelete) => {
    axios.delete(`/gallery/delete/${idToDelete}`)
    .then((response) => {
      console.log('response from DELETE request:', response);
      this.getPics();
    }).catch((error) => {
      console.log('error in DELETE request:', error);
    });
  }

  addLike = (idToLike) => {
    axios.put(`/gallery/like/${idToLike}`)
    .then((response) => {
      console.log('response form PUT request:', response);
      this.getPics();
    }).catch((error) => {
      console.log('error in PUT request:', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryForm addPhoto={this.addPhoto} />
        <GalleryList deletePhoto={this.deletePhoto} addLike={this.addLike} gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
