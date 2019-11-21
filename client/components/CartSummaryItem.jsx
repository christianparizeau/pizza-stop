import React from 'react';

export default function CartSummartyItem({ item }) {
  const price = '$' + (item.price / 100).toFixed(2);
  return (
    <div className="d-flex">
      <img className="fixed-image-height" src={item.image} />
      <div>
        <h1>{item.name}</h1>
        <p className="text-muted">{price}</p>
        <p>{item.shortDescription}</p>
      </div>
    </div>
  );

}
