import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovies from './AddMovies';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
