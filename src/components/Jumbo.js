import React from 'react'

const Jumbo = (props) => {
    return (
        <div id={props.id} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.text}</p>
            </div>
        </div>
    );
}
 
export default Jumbo;