import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Wicked Sales';
    this.logo = 'Placeholder';
  }

  render() {
    return (
      <div>
        <Header name={this.name} logo={this.logo} />
        <ProductList />
      </div>
    );
  }
}
