import React from 'react';
import CartSummartyItem from './CartSummaryItem';
export default function CartSummary(props) {
  if (!props.cartItems) {
    return <div>You have no items in your cart <i className="far fa-frown"></i></div>;
  }
  const reducer = (acc, cartItem) => { return acc + cartItem.price; };
  let totalPrice = props.cartItems.reduce(reducer);
  totalPrice = '$' + (totalPrice / 100).toFixed(2);
  const cartItemElements = props.cartItems.map(cartItem => {
    return <CartSummartyItem key={cartItem.productId} item={cartItem} />;
  });
  return (
    <div>
      <h1 className='header-size'>{totalPrice}</h1>
      {cartItemElements}

    </div>
  );
}
