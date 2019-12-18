import React from 'react';

export default function CartSummartyItem({ item }) {
  const price = '$' + (item.price / 100).toFixed(2);
  return (
    <div className="d-flex cart-item mt-2 container">
      <div className="row">
        <img className='fixed-image-height m-2 col-3' src={item.image} />
        <div className='m-2 col-3'>
          <h1>{item.name}</h1>
          <p className="text-muted">{price}</p>
        </div>
        <p className='col-md-12 col-lg-3 '>{item.shortDescription}</p>
      </div>
    </div>
  );

}
