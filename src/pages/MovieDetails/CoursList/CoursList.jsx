import React, { useEffect, useState } from 'react';
import coursesService from '../../../api_service/courses_service';
import CourseCard from '../CourseCard/CourseCard';
import styles from './CourseList.module.css';

export default function CoursList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesService.getAll().then((data) => setCourses(data));
  }, []);

  return (
    <div className={styles.coursesListContainer}>
      {courses.map((item) => (
        <CourseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
