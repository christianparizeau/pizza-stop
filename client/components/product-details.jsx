import React from 'react';

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
      <div className="container background">
        <p className="text-muted pointer" onClick={this.getCatalog}>{'< '}Back to catalog </p>
        <div className="row mx-3">
          <img src={image} className="fixed-image-height" />
          <div className=''>
            <h1>{name}</h1>
            <p className="text-muted">{displayPrice}</p>
            <h5>{shortDescription}</h5>
          </div>
        </div>
        <div className="row mx-2">
          <p>{longDescription}</p>
          <a href="#" onClick={this.addToCart} className="btn mb-4 btn-primary">Add to Cart</a>
        </div>
      </div>
    );
  }

}
