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
      <>
        <div className="container">
          <div className="row background border px-2 mx-1 mt-2 mb-2 card">
            <img src={image} className="fixed-image-height" />
            <div className=''>
              <h1 className="text-center">{name}</h1>
              <p className="text-muted text-center">{displayPrice}</p>
              <h5 className="text-center">{shortDescription}</h5>
            </div>
          </div>
          <div className="row px-2 mx-1 background mb-2 border card">
            <p>{longDescription}</p>
          </div>
          <div className="row mx-1 justify-content-between align-items-center background border">
            <CatalogButton catalog={this.getCatalog} />
            <p className="mb-0">Price: {displayPrice}</p>
            <button onClick={this.addToCart} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
        <div className="small-spacer"></div>
      </>
    );
  }

}
