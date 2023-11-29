import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import logo from '../../img/dilamica_rectangular.png';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div>
        {/* <h1 className={styles.titleNetflix}>NetflixDemo</h1> */}
        <img src={logo} alt='photoLogo' className={styles.imgLogo} />
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.navBarButton}>Courses</button>
          <button className={styles.navBarButton}>Movies</button>
        </div>
        <div>
          <FaCircleUser className={styles.loginButton} />
        </div>
      </div>

      {/* <Link to={'/movieForm'}>
        <button className={styles.navBarButton}>Add movie</button>
      </Link> */}
    </div>
  );
}
