import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Wicked Sales';
    this.logo = 'Placeholder';
  }

  render() {
    return <Header name={this.name} logo={this.logo} />;
  }
}
