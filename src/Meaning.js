import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props){
    return (<div>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index)
        {
            return (
                <div key={index}>
                    <p className="definition">{definition.definition}</p>
                  
                    <p><em>{definition.example}</em></p>
                    <Synonyms synonyms={definition.synonyms}/>
                    
                    </div>
            );
        })}

    
    </div>
    );
}