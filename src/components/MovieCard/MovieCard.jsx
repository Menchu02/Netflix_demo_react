import React from 'react';
import styles from './MovieCard.module.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MovieCard({ item, deleteById }) {
  let handlerDelete = () => {
    deleteById(item.id);
  };
  return (
    <div>
      <div className={styles.movieCardContainer} key={item.id}>
        <Link to={`/movieDetails/${item.id}`}>
          <img className={styles.imgMovieCard} src={item.img} alt={item.name} />
        </Link>

        <p className={styles.movieCardText}>{item.name}</p>
        <div className={styles.iconsContainer}>
          <AiOutlineDelete onClick={handlerDelete} className={styles.icons} />
          <BsPencil className={styles.icons} />
        </div>
      </div>
    </div>
  );
}
