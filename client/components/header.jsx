import React from 'react';

export default function Header({ name, logo }) {
  return (
    <div>
      <h1>{name}</h1> <p>{logo}</p>
    </div>
  );
}
