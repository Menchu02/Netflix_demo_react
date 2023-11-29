import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import logo from '../../img/dilamica_rectangular.png';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <Link to={'/'}>
          <img src={logo} alt='photoLogo' className={styles.imgLogo} />
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonContainer}>
          <Link to={'/coursesList'}>
            <button className={styles.navBarButton}>Courses</button>
          </Link>
          <Link to={'/movieList'}>
            <button className={styles.navBarButton}>Movies</button>
          </Link>
        </div>
        <div>
          <FaCircleUser className={styles.loginButton} />
        </div>
      </div>
    </div>
  );
}
