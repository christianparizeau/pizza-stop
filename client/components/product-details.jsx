import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getCatalog = this.getCatalog.bind(this);
  }

  getCatalog() {
    this.props.viewSetter('catalog', {});
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
    return (
      <div className='conatiner'>
        <p className="text-muted" onClick={this.getCatalog}>{'< '}Back to catalog </p>
        <div className="row">
          <img src={image} className="fixed-image-height" />
          <div>
            <h1>{name}</h1>
            <p className="text-muted">{price}</p>
            <p>{shortDescription}</p>
          </div>
        </div>
        <p>{longDescription}</p>
      </div>
    );
  }

}
