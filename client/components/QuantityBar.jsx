import React from 'react';

function QuantityBar(props) {
  return (
    <div className="d-flex justify-content-center row pl-3">
      <button className="btn btn-sm btn-secondary border-right border-dark"
        disabled={props.quantity === 1 || props.isSubmitting}
        onClick={props.reduceQuantity}><i className="fas fa-minus" /></button>
      <span className="mx-3 align-base mt-1"><strong>{props.quantity}</strong></span>
      <button className="btn btn-success btn-sm border-left border-dark"
        disabled={props.isSubmitting}
        onClick={props.addToCart}><i className="fas fa-plus" /></button>
    </div>
  );
}

export default QuantityBar;
