import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.price = this.props.price;
    this.fieldChange = this.fieldChange.bind(this);
  }

  fieldChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleCheckout() {
    this.props.checkout();
  }

  render() {
    return (
      <div className="container">
        <h1>My Cart</h1>
        <h3 className='text-muted'>{this.price}</h3>
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
            type="textarea"
            name='shippingAddress'
            onChange={this.fieldChange}
            value={this.state.name} />
        </div>
        <div className="d-flex justify-space-between">
          <p onClick className="text-muted">{'<'}Continue Shopping</p>
          <button className="btn btn-primary" onClick={this.handleCheckout}>Place Order</button>
        </div>
      </div>
    );
  }
}
