import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../../api_service/movie_service';
import styles from './movieDetails.module.css';

export default function MovieDetails() {
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    movieService.getById(id).then((res) => setMovieDetail(res));
  }, [id]);

  return (
    <div className={styles.detailsContainer}>
      <div>
        <img
          className={styles.detailsImg}
          src={movieDetail.img}
          alt='photoDetailMovie'
        ></img>
      </div>
      <div className={styles.containerImg}>
        <p>Name : {movieDetail.name}</p>
        <p> Director : {movieDetail.director}</p>
        <p>Year : {movieDetail.year}</p>
        <p>Genre : {movieDetail.genre}</p>
      </div>
    </div>
  );
}
