import React from 'react';

export default function Header({ name, cartItemCount }) {
  if (!cartItemCount) {
    cartItemCount = 0;
  }
  return (
    <div className='text-center header'>
      <h1 className='mr-auto ml-3'><i className="fas fa-snowboarding fa-fw fa-spin"></i> {name} <i className="fas fa-snowboarding fa-fw fa-spin"></i></h1>
      <div className="header-size badge badge-secondary">{cartItemCount}</div><i className='fas fa-shopping-cart fa-fw fa-3x mr-1'></i>
    </div>
  );
}
