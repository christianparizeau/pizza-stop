import React from 'react';

export default function Header({ name }) {
  return (
    <div className='text-center'>
      <h1><i className="fas fa-snowboarding fa-fw fa-spin"></i> {name} <i className="fas fa-snowboarding fa-fw fa-spin"></i></h1>
    </div>
  );
}
