import React from 'react';
import CartSummartyItem from './CartSummaryItem';
export default function CartSummary(props) {
  if (!props.cartItems) {
    return <div>You have no items in your cart <i className="far fa-frown"></i></div>;
  }

  const catalog = () => {
    props.setView('catalog', {});
  };

  const checkout = () => {
    props.setView('checkout', {});
  };

  const reducer = (acc, cartItem) => { return acc + cartItem.price; };
  let totalPrice = props.cartItems.reduce(reducer, 0);
  totalPrice = '$' + (totalPrice / 100).toFixed(2);
  const cartItemElements = props.cartItems.map((cartItem, index) => {
    return <CartSummartyItem key={index} item={cartItem} />;
  });
  return (
    <div>
      <div className="container">
        {cartItemElements}
        <div className='spacer mt-2'></div>
      </div>
      <div className="footer d-flex align-middle">
        <p className='text-muted pointer' onClick={catalog}>{'<'} back to Catalog</p>
        <h1 className='header-size'>Cart Total: {totalPrice}</h1>
        <button className='btn btn-info mr-4' onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
