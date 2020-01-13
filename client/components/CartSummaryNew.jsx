import React from 'react';
import CartSummaryItem from './CartSummaryItem';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.cartItems };
  }

  catalog() {
    this.props.setView('catalog', {});
  }

  checkout() {
    this.props.setView('checkout', {});
  }

  getTotalPrice() {
    const reducer = (acc, cartItem) => { return acc + cartItem.price; };
    const RawTotalPrice = this.props.cartItems.reduce(reducer, 0);
    this.totalPrice = '$' + (RawTotalPrice / 100).toFixed(2);
  }

  render() {
    if (!this.state.items.length) {
      return <>
        <div className="text-center">
          <div className="h1 m-4">
            You have no items in your cart < i className="far fa-frown" ></i >
          </div>
          <div className="h3 m-4 pointer" onClick={this.catalog}>
            <u>
              Go back to the catalog to add items to your cart
            </u>
          </div>
        </div>
        <div className="footer d-flex align-items-center px-2">
          <p className='text-muted pointer' onClick={this.catalog}>{'<'} back to Catalog</p>
          <h1 className='header-size'>Cart Total: {this.totalPrice}</h1>
          <button className='btn btn-dark mr-4' disabled onClick={this.checkout}>Checkout</button>
        </div>
      </>;
    }
    const cartItemElements = this.state.items.map((cartItem, index) => {
      return <CartSummaryItem key={index} item={cartItem} />;
    });
    return (
      <>
        <div className="container background">
          {cartItemElements}
          <div className='spacer mt-2'></div>
        </div>
        <div className="footer d-flex align-items-center px-2">
          <p className='text-muted pointer' onClick={this.catalog}>{'<'} back to Catalog</p>
          <h1 className='header-size'>Cart Total: {this.totalPrice}</h1>
          <button className='btn btn-info mr-4' onClick={this.checkout}>Checkout</button>
        </div>
      </>
    );
  }
}

export default CartSummary;
