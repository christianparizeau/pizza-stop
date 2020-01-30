import React from 'react';
import PriceBar from './PriceBar';

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
              <h5 className="text-center">{shortDescription}</h5>
            </div>
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
