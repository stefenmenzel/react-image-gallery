import React, {Component} from 'react';

class GalleryItem extends Component{

    addLike = (idToLike) => {
        this.props.addLike(idToLike);
    }

    render(){
        return(
            <div>
                <img src={this.props.galleryItem.path} alt=''></img>
                <button onClick={() => this.addLike(this.props.galleryItem.id)}>LOVE IT!</button>
                <p>Likes: {this.props.galleryItem.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;