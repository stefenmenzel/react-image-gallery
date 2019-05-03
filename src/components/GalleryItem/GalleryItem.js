import React, {Component} from 'react';

class GalleryItem extends Component{

    render(){
        return(
            <li><img src={this.props.galleryItem.path} alt=''></img></li>
        )
    }
}

export default GalleryItem;