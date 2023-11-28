import React from 'react';

export default function CourseCard({ item }) {
  return (
    <div>
      <img src={item.img} alt='photo' />
      <p>{item.name}</p>
    </div>
  );
}
