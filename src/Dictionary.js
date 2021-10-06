import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handlePexelResponse(response){
        setPhotos(response.data.photos);
    }

    function handleResponse(response){
setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
    
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);
let pexelApiKey = "563492ad6f91700001000001d1bcd9cbb2da47e2bdf5ed40b556b153";
let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = {Authorization: `Bearer ${pexelApiKey}`};
axios.get(pexelApiUrl, {headers: headers}).then(handlePexelResponse);

}
    
    function handleKeywordChange (event){
        setKeyword(event.target.value);
    }
    return <div className="Dictionary">
        <h1>Dictionary</h1>
        <br/>
        <form onSubmit={search}><input type="search" onChange={handleKeywordChange} autoFocus={true}/></form>
        <Results results={results}/>
        <Photos photos={photos}/>
    </div>
}