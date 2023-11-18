import React, { useState } from 'react';
import style from './movieForm.module.css';
import { useNavigate } from 'react-router-dom';
import movieService from '../../../api_service/movie_service';

//MODELO
let movieInital = {
  img: '',
  name: '',
  director: '',
  genre: '',
  id: '',
  year: '',
};

export default function MovieForm() {
  const [newMovie, setNewMovie] = useState(movieInital);
  const navigator = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMovie[name] = value;
    setNewMovie({ ...newMovie });
    console.log(newMovie);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await movieService.createMovie(newMovie);
    navigator('/');
  };

  return (
    <div className={style.patherContainerForm}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <img className={style.formImg} src={newMovie.img} alt={newMovie.name} />

        <textarea
          className={style.input}
          value={newMovie.img}
          onChange={handleOnChange}
          type='textarea'
          name='img'
          placeholder='PhotoUrl'
        ></textarea>
        <input
          className={style.input}
          value={newMovie.name}
          onChange={handleOnChange}
          placeholder='Name'
          name='name'
          type='text'
        />
        <input
          className={style.input}
          value={newMovie.director}
          onChange={handleOnChange}
          placeholder='Director'
          name='director'
          type='text'
        />
        <input
          className={style.input}
          value={newMovie.year}
          onChange={handleOnChange}
          placeholder='Year'
          name='year'
          type='text'
        />
        <input
          className={style.input}
          value={newMovie.genre}
          onChange={handleOnChange}
          placeholder='Genre'
          name='genre'
          type='text'
        />
        <button className={style.formButton} type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
