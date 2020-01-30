import React from 'react';

export default function Header({ name, cartItemCount, setView }) {
  if (!cartItemCount) {
    cartItemCount = 0;
  }

  const viewSet = () => {
    setView('cart', {});
  };

  const returnToCatalog = () => {
    setView('catalog', {});
  };

  let item = ' Items';
  if (cartItemCount === 1) {
    item = ' Item';
  }

  return (
    <div className="text-center header">
      <h2 className="mr-auto mb-0 ml-2 mobile-size pointer"
        onClick={returnToCatalog}
      >
        {' '}
        {name} <i className="fas fa-pizza-slice fa-fw"></i>
      </h2>
      <div
        onClick={viewSet}
        className="header-size mx-2 badge badge-secondary pointer"
      >
        {cartItemCount}
        <span className="mobile-hide">{item}</span>
      </div>
      <i
        onClick={viewSet}
        className="fas fa-shopping-cart fa-fw fa-lg mr-2 pointer"
      ></i>
    </div>
  );
}
