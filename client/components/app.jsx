import React from 'react';
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
      view: {
        name: 'cart',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  placeOrder(checkoutInfo) {
    const reqs = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutInfo)
    };
    fetch('/api/orders', reqs)
      .then(res => res.json())
      .then(data => {
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

  addToCart(product) {
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
        const cart = Array.from(this.state.cart);
        cart.push(cartItem);
        this.setState({ cart });
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
        cartItems={this.state.cart}
        remove={this.removeFromCart}
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
    return (
      <div>
        <Header
          name={this.name}
          cartItemCount={this.state.cart.length}
          setView={this.setView}
        />
        {page}
      </div>
    );
  }
}
