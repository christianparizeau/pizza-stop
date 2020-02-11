import React from 'react';
import CatalogButton from './CatalogButton';

export default function PriceBar(props) {
  return (
    <div className="row black-bg mx-1 py-1 px-1 sticky-top sticky-offset justify-content-between align-items-center border">
      <CatalogButton catalog={props.getCatalog} light={true} />
      <p className="mb-0">Price: {props.displayPrice}</p>
      <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
    </div>);
}
