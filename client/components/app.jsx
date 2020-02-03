import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Pizza Stop';
    this.state = {
      cart: [],
      isSubmitting: false,
      isModalVisible: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.reduceQuantity = this.reduceQuantity.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  placeOrder() {
    const reqs = { method: 'DELETE' };
    fetch('/api/orders', reqs)
      .then(() => {
        this.setView('catalog', {});
        this.setState({ cart: [] });
      });
  }

  removeFromCart(productId) {
    const reqs = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: productId
      })
    };
    fetch('/api/cart', reqs)
      .then(res => res.json())
      .then(productId => {
        const cart = this.state.cart.filter(cartItem => (cartItem.id !== productId));
        this.setState({ cart });
      });
  }

  reduceQuantity(productId, quantity) {
    this.setState({ isSubmitting: true });
    if (quantity === 1) return;
    const reqs = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: productId
      })
    };
    fetch('/api/cart', reqs)
      .then(res => res.json())
      .then(status => {
        if (status) {
          const productCopy = JSON.parse(JSON.stringify(this.state.cart.find(cartItem => cartItem.id === productId)));
          productCopy.quantity = productCopy.quantity - 1;
          const cart = this.state.cart.filter(cartItem => (cartItem.id !== productId));
          cart.push(productCopy);
          this.setState({ cart, isSubmitting: false });
        }
      });
  }

  addToCart(product) {
    this.setState({ isSubmitting: true });
    const reqs = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', reqs)
      .then(res => res.json())
      .then(cartItem => {
        const cart = Array.from(this.state.cart).filter(element => element.productId !== cartItem.productId);
        cart.push(cartItem);
        this.setState({ cart, isSubmitting: false });
      });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(cart => {
        this.setState({ cart });
      })
      .catch(err => console.error(err));
  }

  setView(name, params) {
    const view = { name, params };
    this.setState({ view });
  }

  componentDidMount() {
    this.getCartItems();
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    const viewState = this.state.view.name;
    let page = '';
    if (viewState === 'catalog') {
      page = <ProductList viewSetter={this.setView} />;
    } else if (viewState === 'details') {
      page = (
        <ProductDetails
          productId={this.state.view.params}
          viewSetter={this.setView}
          addToCart={this.addToCart}
        />
      );
    } else if (viewState === 'cart') {
      page = <CartSummary
        add={this.addToCart}
        reduceQuantity={this.reduceQuantity}
        cartItems={this.state.cart}
        remove={this.removeFromCart}
        isSubmitting={this.state.isSubmitting}
        setView={this.setView} />;
    } else if (viewState === 'checkout') {
      page = (
        <CheckoutForm
          checkout={this.placeOrder}
          cartItems={this.state.cart}
          setView={this.setView}
        />
      );
    }
    const reducer = (acc, cartItem) => { return acc + cartItem.quantity; };
    const cartItemCount = this.state.cart.reduce(reducer, 0);
    return (
      <>
        <Modal show={this.state.isModalVisible} onHide={() => { }}>
          <Modal.Body>This website is for demonstration purposes only and no real purchases will be made. As such, please do not enter any personal or sensitive information.</Modal.Body>
          <Modal.Footer><button className={'btn btn-primary'} onClick={this.hideModal}>I Understand</button></Modal.Footer>
        </Modal>
        <Header
          name={this.name}
          cartItemCount={cartItemCount}
          setView={this.setView}
        />
        {page}
      </>
    );
  }
}
