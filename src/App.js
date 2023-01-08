
import React from 'react';
import {useState, useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard.jsx';

// 7d34e89c77a28b32baecdf97ccc5b173

const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=7d34e89c77a28b32baecdf97ccc5b173'

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&query=${title}`);
        const data = await response.json();

        setMovies(data.results);
    };

    useEffect(() =>{
        searchMovies("Batman");
    }, []);
  return (
    <div className = "app">
        <h1>MovieLand</h1>

        <div className = "search">
            <input
                placeholder = "Search for movies"
                value = {searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)}/>
            <img
                src = {SearchIcon}
                alt = "search"
                onClick = {()=> searchMovies(searchTerm)}
                />
        </div>

            {movies.length > 0 ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
            </div>
        ) : (
            <div className="empty">
            <h2>No movies found</h2>
            </div>
        )}
        
    </div>
  )
}

export default App