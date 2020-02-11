import React from 'react';
import QuantityBar from './QuantityBar';

export default function CartSummartyItem({ item, remove, add, reduceQuantity, isSubmitting }) {
  const price = '$' + (item.price / 100).toFixed(2);
  const removeItem = () => remove(item.name, item.id);
  const addItem = () => add(item);
  const decrementQuantity = () => reduceQuantity(item.id, item.quantity);
  const totalPrice = '$' + (item.price / 100).toFixed(2) * item.quantity;
  return (
    <>
      <div className="d-flex cart-item mt-2 container">
        <div className="row">
          <img className='fixed-image-height-summary col-md-3 d-md-block d-none m-0 col-2 p-0' src={item.image} />
          <div className='p-2 col-sm-12 col-md-3 border-left border-right mb-0'>
            <h2 className="text-center ">{item.name}</h2>
            <p className="text-muted text-center">{price} Per Item</p>
          </div>
          <p className='col-md-12 col-lg-3 pr-4 border-top pt-2'>{item.shortDescription}</p>
          <div className="d-flex px-2 mb-2 align-items-center w-100 justify-content-between border-top pt-2">
            <QuantityBar addToCart={addItem} reduceQuantity={decrementQuantity} isSubmitting={isSubmitting} quantity={item.quantity} />
            {totalPrice}
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
