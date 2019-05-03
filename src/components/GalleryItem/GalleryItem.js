import React, {Component} from 'react';

class GalleryItem extends Component{

    addLike = (idToLike) => {
        this.props.addLike(idToLike);
    }

    render(){
        return(
            <div className="gItem" >
                <img className="gImage" src={this.props.galleryItem.path} alt=''></img>
                <button className="gButton" onClick={() => this.addLike(this.props.galleryItem.id)}>LOVE IT!</button>
                <p className="gP">Likes: {this.props.galleryItem.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;