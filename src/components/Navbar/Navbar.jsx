import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <h1 className={styles.titleNetflix}>NetflixDemo</h1>
      <button className={styles.navBarButton}>Courses</button>
      <button className={styles.navBarButton}>Movies</button>
      <Link to={'/movieForm'}>
        <button className={styles.navBarButton}>Add movie</button>
      </Link>
    </div>
  );
}
