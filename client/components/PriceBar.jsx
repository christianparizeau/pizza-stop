import React from 'react';
import CatalogButton from './CatalogButton';

export default function PriceBar(props) {
  return (
    <div className="row mx-1 sticky-top sticky-offset justify-content-between align-items-center background border">
      <CatalogButton catalog={props.getCatalog} />
      <p className="mb-0">Price: {props.displayPrice}</p>
      <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
    </div>);
}
