import React, {Component} from 'react';
import './GalleryForm.css';

class GalleryForm extends Component {

    state = {
        newPhoto : {
            path: '',
            description: '',
            likes: 0
        }
    }

    addPhoto = (event) => {
        event.preventDefault();
        this.props.addPhoto(this.state.newPhoto);
    }

    updatePhoto = (propertyToChange, event) => {
        this.setState({
            newPhoto: {
                ...this.state.newPhoto,
                [propertyToChange] : event.target.value
            }
        })
    }

    render(){

        return(
            <div className="inputs">
                <h2>Add a Photo!</h2>
                <form onSubmit={(e) => this.addPhoto(e)}>
                    <input onChange={(e) => this.updatePhoto('path', e)} placeholder="path" />
                    <input onChange={(e) => this.updatePhoto('description', e)} placeholder="description" />
                    <button>Add Photo</button>
                </form>                
            </div>
        )
    }
}

export default GalleryForm;