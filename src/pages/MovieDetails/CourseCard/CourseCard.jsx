import React from 'react';
import styles from './CourseCard.module.css';

export default function CourseCard({ item }) {
  return (
    <div className={styles.courseCardContainer}>
      <img src={item.img} alt='photo' className={styles.imgCourseCard} />
      <p className={styles.headingCourseCard}>{item.name}</p>
    </div>
  );
}
