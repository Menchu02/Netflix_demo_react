import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <h1 className={styles.titleNetflix}>NetflixDemo</h1>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.navBarButton}>Courses</button>
        <button className={styles.navBarButton}>Movies</button>
        <FaUserAlt className={styles.loginButton} />
      </div>

      {/* <Link to={'/movieForm'}>
        <button className={styles.navBarButton}>Add movie</button>
      </Link> */}
    </div>
  );
}
