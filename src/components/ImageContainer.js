import React from 'react';


const ImageContainer = (props) => {
    return (
        <img src={props.src} alt="My Profile" className="img-thumbnail"/>
    );
}
 
export default ImageContainer;