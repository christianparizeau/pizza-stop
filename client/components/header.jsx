import React from 'react';

export default function Header({ name, cartItemCount, setView }) {
  if (!cartItemCount) {
    cartItemCount = 0;
  }

  const viewSet = () => {
    setView('cart', {});
  };

  return (
    <div className='text-center header'>
      <h1 className='mr-auto ml-3'><i className="fas fa-snowboarding fa-fw fa-spin"></i> {name} <i className="fas fa-snowboarding fa-fw fa-spin"></i></h1>
      <div onClick={viewSet}
        className="header-size badge badge-secondary pointer">{cartItemCount}</div>
      <i onClick={viewSet} className='fas fa-shopping-cart fa-fw fa-3x mr-1 pointer'></i>
    </div>
  );
}
