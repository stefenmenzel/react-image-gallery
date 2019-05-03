import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import './GalleryList.css';

class GalleryList extends Component{

    render(){
        return(
            <div className="gallery">
                <p>Gallery goes here</p>
                {this.props.gallery.map(image => {
                    return <GalleryItem key={image.id} className="gItem" addLike={this.props.addLike} galleryItem={image} />
                })}
                {/* <img src="images/goat_small.jpg" /> */}
            </div>
        )
    }
}

export default GalleryList;