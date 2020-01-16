import React from 'react';

function QuantityBar(props) {
  return (
    <div className="justify-content-center align-items-center flex-column border row">
      <button className="btn btn-outline-success border-left border-dark"
        onClick={props.addToCart}><i className="fas fa-plus" /></button>
      <div className="d-inline-block">{props.quantity}</div>
      <button className="btn btn-outline-secondary border-right border-dark" disabled={props.quantity === 1} onClick={props.reduceQuantity}><i className="fas fa-minus" /></button>
    </div>
  );
}

export default QuantityBar;
