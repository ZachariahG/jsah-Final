import React, { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function SearchBar() {
    const { name } = useParams<{name: string}>('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        e.preventDefault();
        axios.get(`https://api.twitch.tv/helix/games?${name}`)
        .then((res) => setResults(res.data))
        .catch((err) => console.error('No results found:', err))
    };
 
    return (
        <div>
        <input 
        type="text" maxLength={40}
        placeholder="Search for A Game..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <ul> 
            {results.map((games) =>
            <li key={games.id}>{games.name}--{games.box_art_url || "Image Unavailable"}--<Link to={`https://igbd.com/${games.name}`} /> </li>)}
        </ul>
        </div>
    )
    
};

export default SearchBar; 