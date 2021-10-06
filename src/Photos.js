import React from "react";

export default function Photos(props){
    if (props.photos){
        return (
            <div className="row">
            {props.photos.map(function(photo, index){
            return (<div className="col-4" keu={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer"><img className="img-fluid" alt="visual" src={photo.src.landscape} 
             /></a>
            </div>);
            })}
            </div>
        );
    } else {return null;}
}