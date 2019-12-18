import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data =>
        this.setState({ products: data }))
      .catch(err => console.error(err));

  }

  render() {
    const elements = this.state.products.map(element => {
      return <ProductListItem
        product={element}
        setView={this.props.viewSetter}
        key={element.productId} />;
    });
    return (
      <div className="d-flex mt-4 flex-wrap mt-2 justify-content-around container background">
        {elements}
      </div>
    );
  }
}
