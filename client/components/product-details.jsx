import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PriceBar from './PriceBar';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isModalVisible: false
    };
    this.getCatalog = this.getCatalog.bind(this);
    this.getCart = this.getCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getCatalog() {
    this.props.viewSetter('catalog', {});
  }

  addToCart() {
    this.hideModal();
    this.props.addToCart(this.state.product);
  }

  hideModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  getCart() {
    this.props.viewSetter('cart', {});
  }

  componentDidMount() {
    fetch(`/api/products?productId=${this.props.productId.productId}`)
      .then(res => res.json())
      .then(product => {
        this.setState({ product });
      });
  }

  render() {
    if (!this.state.product) return null;
    const { name, price, image, shortDescription, longDescription } = this.state.product;
    const displayPrice = '$' + (price / 100).toFixed(2);
    return (
      <>
        <Modal show={this.state.isModalVisible} onHide={() => { }}>
          <Modal.Body>You have added a {this.state.product.name} to your cart!</Modal.Body>
          <Modal.Footer>
            <button className={'btn btn-success ml-2 mr-auto mb-0'} onClick={this.getCart}>View Cart</button>
            <button className={'btn btn-primary mr-2 ml-auto mb-0'} onClick={this.getCatalog}>Continue Shopping</button>
          </Modal.Footer>
        </Modal>
        <div className="container">
          <div className="row background border px-2 mx-1 mt-2 mb-2 card">
            <img src={image} className="fixed-image-height" />
            <>
              <h1 className="text-center">{name}</h1>
              <h5 className="text-center">{shortDescription}</h5>
            </>
          </div>
          <PriceBar getCatalog={this.getCatalog} displayPrice={displayPrice} addToCart={this.addToCart} />
          <div className="row px-2 mt-2 mx-1 background mb-2 border card">
            <p>{longDescription}</p>
          </div>
        </div>
        <div className="small-spacer"></div>
      </>
    );
  }

}
