import React, { useState } from "react";
import axios from 'axios';

//game title, image, summary, price, avg player count

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        e.preventDefault();
        axios.get(`http://api.gamalytic.com/game/search?name=${query}`)
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
            {results.map((game) =>
            <li key={game.steamId}>{game.name}--{game.description}--{game.image}--{game.price}--{game.players}</li>
            )}
        </ul>
        </div>
    )
    
};

export default SearchBar; 