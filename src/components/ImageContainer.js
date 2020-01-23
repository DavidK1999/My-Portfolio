import React from 'react';


const ImageContainer = (props) => {

    let pictures = props.images.map(image => 
        <img src={image} alt="My Profile" className="img-thumbnail"/>
    )
    return (
        <div className="image-container" style={{justifyContent: props.alignment}}>
            {pictures}
        </div>
    );
}
 
export default ImageContainer;