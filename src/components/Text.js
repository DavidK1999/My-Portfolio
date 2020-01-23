import React from 'react'

const Text = (props) => {
    return (
        <div className="text-container">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            {props.img}
        </div>

    );

}
 
export default Text;