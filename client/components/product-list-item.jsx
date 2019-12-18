import React from 'react';

export default function ProductListItem({ product, setView }) {
  const viewSetter = () => {
    setView('details', { productId: product.productId });
  };
  const price = '$' + (product.price / 100).toFixed(2);
  return (
    <div className="card mb-4 pointer"
      onClick={viewSetter}
      style={{ width: '20rem' }}>
      <img src={product.image} className="card-img-top fixed-image-height"></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className='text-muted'>{price}</h6>
        <p className="card-text">{product.shortDescription}</p>
      </div>
    </div>
  );

}
