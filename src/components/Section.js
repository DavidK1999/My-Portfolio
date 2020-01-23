import React from 'react'

const Section = (props) => {
    return (
        <div id={props.id} className="card">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{props.pending || "Check it Out"}</a>
            </div>
        </div>
    );
}
 
export default Section;