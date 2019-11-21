import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Wicked Sales';
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch('api/cart', req)
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
      page = <ProductDetails
        productId={this.state.view.params}
        viewSetter={this.setView}
        addToCart={this.addToCart} />;
    }
    return (
      <div>
        <Header name={this.name} cartItemCount={this.state.cart.length} />
        {page}
      </div>
    );
  }
}
