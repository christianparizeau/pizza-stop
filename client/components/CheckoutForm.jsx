import React from 'react';
import CatalogButton from './CatalogButton';
import Modal from 'react-bootstrap/Modal';
export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      isModalVisible: true
    };
    this.price = this.findTotalPrice(this.props.cartItems);
    this.fieldChange = this.fieldChange.bind(this);
    this.goToCatalog = this.goToCatalog.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  fieldChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  findTotalPrice(cartItems) {
    const reducer = (acc, cartItem) => { return acc + cartItem.price * cartItem.quantity; };
    const totalPrice = cartItems.reduce(reducer, 0);
    return ('$' + (totalPrice / 100).toFixed(2));
  }

  goToCatalog() {
    this.props.setView('catalog', {});
  }

  handleCheckout(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.checkout();
  }

  render() {
    return (
      <>
        <Modal show={this.state.isModalVisible} onHide={() => { }}>
          <Modal.Body>No real purchase is being made, personal information will not be stored or processed in anyway. Please do not enter any personal or sensitive information.</Modal.Body>
          <Modal.Footer><button className={'btn btn-primary'} onClick={this.hideModal}>I Understand</button></Modal.Footer>
        </Modal>
        <div className="container">
          <h1 className="mt-4 mb-2">My Cart</h1>
          <h4 className='text-muted mb-4'>{this.price}</h4>
          <form id="checkout" onSubmit={this.handleCheckout}>
            <div className="input-group mb-3">

              <label htmlFor="name">Name</label>
              <div className="col-12">
                <input className='form-control'
                  type="text"
                  name='name'
                  required
                  onChange={this.fieldChange}
                  value={this.state.name} />
              </div>
            </div>
            <div className="input-group mb-3">
              <label htmlFor="creditCard">Credit Card</label>
              <div className="col-12">
                <input className='form-control'
                  type="number"
                  name='creditCard'
                  required
                  onChange={this.fieldChange}
                  value={this.state.creditCard} />
              </div>
            </div>
            <div className="input-group mb-4">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <div className="col-12">
                <textarea className='form-control'
                  type="text"
                  name='shippingAddress'
                  required
                  onChange={this.fieldChange}
                  value={this.state.shippingAddress} />
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-between">
            <CatalogButton noOutline catalog={this.goToCatalog} />
            <button type="submit" form="checkout" className="btn btn-primary">Place Order</button>
          </div>
        </div >
      </>
    );
  }
}
