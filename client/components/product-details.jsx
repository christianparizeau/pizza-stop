import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/?productID=${this.props.productId}`)
      .then(res => res.json())
      .then(product => {
        this.setState({ product });
      });
  }

  render() {
    if (!this.state.product) return null;
    const { name, price, image, shortDescription, longDescription } = this.state.product;
    return (
      <div>
        <p className="text-muted">{'< '}Back to catalog </p>
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
