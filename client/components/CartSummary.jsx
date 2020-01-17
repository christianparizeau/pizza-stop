import React from 'react';
import CartSummartyItem from './CartSummaryItem';
export default function CartSummary(props) {
  const catalog = () => {
    props.setView('catalog', {});
  };
  const checkout = () => {
    props.setView('checkout', {});
  };
  const reducer = (acc, cartItem) => { return acc + cartItem.price * cartItem.quantity; };
  let totalPrice = props.cartItems.reduce(reducer, 0);
  totalPrice = '$' + (totalPrice / 100).toFixed(2);
  if (!props.cartItems.length) {
    return <>
      <div className="text-center">
        <div className="h1 m-4">
          You have no items in your cart < i className="far fa-frown" ></i >
        </div>
        <div className="h3 m-4 pointer" onClick={catalog}>
          <u>
            Go back to the catalog to add items to your cart
          </u>
        </div>
      </div>
      <div className="footer d-flex align-items-center px-2">
        <p className='text-muted pointer' onClick={catalog}>{'<'} back to Catalog</p>
        <h3 className='total-size'>Cart Total: {totalPrice}</h3>
        <button className='btn btn-dark mr-4' disabled onClick={checkout}>Checkout</button>
      </div>
    </>;
  }

  const cartItemElements = props.cartItems.map((cartItem, index) => {
    return <CartSummartyItem key={index} remove={props.remove} add={props.add} isSubmitting={props.isSubmitting} reduceQuantity={props.reduceQuantity} item={cartItem} />;
  });
  return (
    <div>
      <div className="container background">
        {cartItemElements}
        <div className='spacer mt-2'></div>
      </div>
      <div className="footer d-flex align-items-center px-2">
        <p className='text-muted pointer' onClick={catalog}>{'<'} back to Catalog</p>
        <h3 className='total-size'>Cart Total: {totalPrice}</h3>
        <button className='btn btn-info mr-4' onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
