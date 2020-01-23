import React from 'react';
import QuantityBar from './QuantityBar';

export default function CartSummartyItem({ item, remove, add, reduceQuantity, isSubmitting }) {
  const price = '$' + (item.price / 100).toFixed(2);
  const removeItem = () => remove(item.id);
  const addItem = () => add(item);
  const decrementQuantity = () => reduceQuantity(item.id, item.quantity);
  return (
    <>
      <div className="d-flex cart-item mt-2 container">
        <div className="row">
          <img className='fixed-image-height m-2 col-3' src={item.image} />
          <div className='m-2 col-3'>
            <h2>{item.name}</h2>
            <p className="text-muted">{price}</p>
          </div>
          <p className='col-md-12 col-lg-3 pr-4'>{item.shortDescription}</p>
          <div className="d-flex px-2 mb-2 align-items-center w-100 justify-content-between">
            <QuantityBar addToCart={addItem} reduceQuantity={decrementQuantity} isSubmitting={isSubmitting} quantity={item.quantity} />
            <button type="button"
              onClick={removeItem}
              className="btn btn-danger btn-sm">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );

}
