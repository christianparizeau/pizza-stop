import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.price = this.findTotalPrice(this.props.cartItems);
    this.fieldChange = this.fieldChange.bind(this);
    this.goToCatalog = this.goToCatalog.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  fieldChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  findTotalPrice(cartItems) {
    const reducer = (acc, cartItem) => { return acc + cartItem.price; };
    const totalPrice = cartItems.reduce(reducer, 0);
    return ('$' + (totalPrice / 100).toFixed(2));
  }

  goToCatalog() {
    this.props.setView('catalog', {});
  }

  handleCheckout() {
    this.props.checkout(this.state);
  }

  render() {
    return (
      <div className="container">
        <h1>My Cart</h1>
        <h4 className='text-muted'>{this.price}</h4>
        <div className="input-group mb-2">
          <label>Name</label>
          <input className='form-control'
            type="text"
            name='name'
            onChange={this.fieldChange}
            value={this.state.name} />
        </div>
        <div className="input-group mb-2">
          <label>Credit Card Number</label>
          <input className='form-control'
            type="text"
            name='creditCard'
            onChange={this.fieldChange}
            value={this.state.creditCard} />
        </div>
        <div className="input-group mb-2">
          <label>Shipping Address</label>
          <input className='form-control'
            type="textArea"
            name='shippingAddress'
            onChange={this.fieldChange}
            value={this.state.shippingAddress} />
        </div>
        <div className="d-flex justify-space-between">
          <p onClick={this.goToCatalog} className="text-muted pointer">{'<'}Continue Shopping</p>
          <button className="btn btn-primary" onClick={this.handleCheckout}>Place Order</button>
        </div>
      </div>
    );
  }
}
