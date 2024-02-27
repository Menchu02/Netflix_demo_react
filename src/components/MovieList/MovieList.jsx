import React, { useEffect } from 'react';
import { useState } from 'react';
import movieService from '../../api_service/movie_service';
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAll().then((data) => setMovies(data));
  }, []);

  //funcion eliminar
  const deleteById = async (idToDelete) => {
    await movieService.deleteById(idToDelete);
    let newData = movies.filter((item) => item.id !== idToDelete);
    setMovies(newData);
  };

  return (
    <div>
      <Link to={'/movieForm'}>
        <button className={styles.addMovieButton}>Add new moviee</button>
      </Link>
      <div className={styles.movieListContainer}>
        {movies.map((item) => (
          <MovieCard key={item.id} item={item} deleteById={deleteById} />
        ))}
      </div>
    </div>
  );
}
