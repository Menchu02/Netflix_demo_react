import React, { useEffect, useState } from 'react';
import coursesService from '../../../api_service/courses_service';

export default function CoursList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesService.getAll().then((data) => setCourses(data));
  }, []);

  return <div></div>;
}
