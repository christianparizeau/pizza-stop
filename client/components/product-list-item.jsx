import React from 'react';

export default function ProductListItem({ product }) {
  const price = '$' + product.price / 100;
  return (
    <div>
      <div>{product.image}</div>
      <div>{product.name}</div>
      <div>{price}</div>
      <div>{product.shortDescription}</div>
    </div>
  );

}
