import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CatalogButton from './CatalogButton';
import StateSelector from './StateSelector';
export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      cvv: '',
      email: '',
      phone: '',
      shippingAddress1: '',
      shippingAddress2: '',
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
    newState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(newState);
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  findTotalPrice(cartItems) {
    const reducer = (acc, cartItem) => { return acc + cartItem.price * cartItem.quantity; };
    const totalPrice = cartItems.reduce(reducer, 0);
    return ('$' + (totalPrice / 100).toFixed(0));
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
          <Modal.Body>No real purchase is being made here, information will not be stored or processed in anyway. Please do not enter any personal or sensitive information.</Modal.Body>
          <Modal.Footer><button className={'btn btn-primary'} onClick={this.hideModal}>I Understand</button></Modal.Footer>
        </Modal>
        <div className="container checkout">
          <h1 className="mt-4 mb-2">Cart Total: </h1>
          <h4 className='mb-3'>{this.price}</h4>
          <form id="checkout" onSubmit={this.handleCheckout}>
            <div className="card p-2 mb-2">
              <div className="input-group mb-2">
                <label htmlFor="name">Contact Details</label>
                <div className="col-12 mb-1">
                  <input className='form-control'
                    type="text"
                    name='name'
                    required
                    placeholder="Full Name"
                    pattern="\S+ \S+"
                    title="Please enter your first and last name"
                    onChange={this.fieldChange}
                    value={this.state.name} />
                </div>
              </div>
              <div className="form-row px-3 justify-content-between">
                <div className="input-group mb-2 col-6">
                  <div className="form-group w-100 mb-2">
                    <input className='form-control'
                      type="email"
                      name='email'
                      placeholder="E-Mail"
                      required
                      onChange={this.fieldChange}
                      value={this.state.email} />
                  </div>
                </div>
                <div className="input-group mb-2 col-6">
                  <div className="form-group w-100 mb-2">
                    <input className='form-control'
                      type="tel"
                      name='phone'
                      placeholder="Phone #"
                      required
                      title="Please enter a valid US phone number with an area code"
                      pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
                      onChange={this.fieldChange}
                      value={this.state.phone} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-2 mb-2">
              <div className="input-group mb-2">
                <label htmlFor="creditCard">Payment Details</label>
                <div className="col-12 d-flex">
                  <div className="col-8 pl-0 pr-1">
                    <input className='form-control'
                      type="text"
                      name='creditCard'
                      placeholder="Credit Card #"
                      minLength={13}
                      maxLength={19}
                      pattern="[0-9]+"
                      required
                      onChange={this.fieldChange}
                      value={this.state.creditCard} />
                  </div>
                  <div className="col-4 pr-0 pl-1">
                    <input className="form-control"
                      type="text"
                      name="cvv"
                      required
                      placeholder={'CVV'}
                      pattern="[0-9]{3}"
                      minLength={3}
                      title="Please enter your 3 digit CVV"
                      onChange={this.fieldChange}
                      value={this.state.cvv} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-2 mb-2">
              <div className="input-group mb-2">
                <label htmlFor="shippingAddress1">Shipping / Billing Address</label>
                <div className="col-12">
                  <input className='form-control'
                    type="text"
                    name='shippingAddress1'
                    required
                    pattern="^[#.0-9a-zA-Z\s,-]+$"
                    title="Please enter a valid address"
                    placeholder="Line 1"
                    onChange={this.fieldChange}
                    value={this.state.shippingAddress1} />
                </div>
              </div>
              <div className="input-group mb-2">
                <div className="col-12">
                  <input className='form-control'
                    type="text"
                    name='shippingAddress2'
                    placeholder="Line 2 (Optional)"
                    onChange={this.fieldChange}
                    title="Please enter a valid address"
                    pattern="^[#.0-9a-zA-Z\s,-]+$"
                    value={this.state.shippingAddress2} />
                </div>
              </div>
              <div className="form-row px-3 justify-content-between">
                <div className="input-group mb-2 col-5">
                  <div className="form-group mb-2">
                    <input className='form-control'
                      type="text"
                      name='city'
                      required
                      placeholder="City"
                      pattern="^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"
                      title="Please enter a valid city name"
                      onChange={this.fieldChange}
                      value={this.state.city} />
                  </div>
                </div>
                <div className="input-group mb-2 col-3">
                  <div className="form-group mb-2">
                    <StateSelector />
                  </div>
                </div>
                <div className="input-group mb-2 col-4">
                  <div className="form-group mb-2">
                    <input className='form-control'
                      type="text"
                      name='zip'
                      required
                      pattern="^\d{5}(?:[-\s]\d{4})?$"
                      title="Please enter a valid zip code"
                      placeholder="Zip"
                      onChange={this.fieldChange}
                      value={this.state.zip} />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="pb-2">
            <div className="d-flex card flex-row p-2 justify-content-between">
              <CatalogButton noOutline catalog={this.goToCatalog} />
              <button type="submit" form="checkout" className="btn btn-primary">Place Order</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
