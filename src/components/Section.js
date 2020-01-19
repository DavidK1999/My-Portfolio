import React from 'react'

const Section = (props) => {
    return (
        <div id={props.id} class="card">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
 
export default Section;