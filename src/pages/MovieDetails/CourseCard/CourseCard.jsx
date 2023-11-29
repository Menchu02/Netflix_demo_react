import React from 'react';
import styles from './CourseCard.module.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CourseCard({ item }) {
  return (
    <div className={styles.courseCardContainer}>
      <img src={item.img} alt='photo' className={styles.imgCourseCard} />
      <p className={styles.headingCourseCard}>{item.name}</p>
      <div className={styles.iconsContainer}>
        <AiOutlineDelete className={styles.icons} />
        <BsPencil className={styles.icons} />
      </div>
    </div>
  );
}
