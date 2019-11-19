import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Wicked Sales';
  }

  render() {
    return (
      <div>
        <Header name={this.name} />
        <ProductList />
      </div>
    );
  }
}
