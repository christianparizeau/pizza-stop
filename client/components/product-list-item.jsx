import React from 'react';

export default function ProductListItem({ product }) {
  const price = '$' + product.price / 100;
  return (
    <div className="card mb-3 ml-3" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top fixed-image-height"></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className='text-muted'>{price}</h6>
        <p className="card-text">{product.shortDescription}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );

}
