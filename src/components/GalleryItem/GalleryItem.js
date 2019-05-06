import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        isClicked: false
    }

    addLike = (idToLike) => {
        this.props.addLike(idToLike);
    }

    deletePhoto = (idToDelete) => {        
        this.props.deletePhoto(idToDelete);
    }

    setClicked = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    setImageOrText = () => {
        return (
            <div className="imageContainer">
                <img className="gImage" onClick={this.setClicked} src={this.props.galleryItem.path} alt=''></img>
                <div onClick={this.setClicked} className={this.state.isClicked ? 'imageOverlay' : 'imageGoAway'}>
                    <div className="imageText">{this.props.galleryItem.description}</div>
                </div>
            </div>
        )
    }

    render() {
        console.log(this.state.isClicked);
        return (
            <div className="gItem" >
                {this.setImageOrText()}
                <div>
                    <button className="gButton" onClick={() => this.addLike(this.props.galleryItem.id)}>LOVE IT!</button>
                    <button className="gButton" onClick={() => this.deletePhoto(this.props.galleryItem.id)}>Delete Image</button>
                </div>                
                <p className="gP">Likes: {this.props.galleryItem.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;