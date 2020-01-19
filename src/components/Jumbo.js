import React from 'react'

const Jumbo = (props) => {
    return (
        <div id={props.id} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{props.title}</h1>
                <p class="lead">{props.text}</p>
            </div>
        </div>
    );
}
 
export default Jumbo;