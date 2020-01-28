import React from 'react';
import CatalogButton from './CatalogButton';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getCatalog = this.getCatalog.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  getCatalog() {
    this.props.viewSetter('catalog', {});
  }

  addToCart() {
    this.props.addToCart(this.state.product);
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
      <div className="container">
        <div className="row mx-2">
          <img src={image} className="fixed-image-height" />
          <div className=''>
            <h1>{name}</h1>
            <p className="text-muted">{displayPrice}</p>
            <h5>{shortDescription}</h5>
          </div>
        </div>
        <div className="row mx-2">
          <p>{longDescription}</p>
        </div>
        <div className="row mx-1 mb-3 justify-content-between align-items-center">
          <CatalogButton catalog={this.getCatalog} />
          <p className="mb-0">Price: {displayPrice}</p>
          <button onClick={this.addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    );
  }

}
