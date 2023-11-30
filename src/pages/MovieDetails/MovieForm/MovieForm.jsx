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

  //FUNCION GENERICA QUE GUARDA LA CLAVE Y VALOR DE CADA CAMPO
  //Y LO VA GUARDANDO EN EL ESTADO A TRAVES DE DEL SETNEWMOVIE CREANDO COPIA DE LO Q YA ESTA ESCRITO
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMovie[name] = value;
    setNewMovie({ ...newMovie });
    console.log(newMovie);
  };

  const handleSubmit = async (e) => {
    //E.PREVENTdEFAULT EVITA EL COMPORTAMIENTO POR DEFECTO DE REACT
    //QUE SERIA RECARGAR LA PAGINA CUANDO SE DA AL BOTON ENVIAR
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
