import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      onlyDisplayStockedProducts: true,
    };
  }

  updateSearchQuery = (event) => {
    const value = event.target.value;
    this.setState({
      searchQuery: value,
    });
  };

  updateDisplayStockedProducts = (event) => {
    this.setState({
      onlyDisplayStockedProducts: event.target.checked,
    });
  };

  // get filteredProducts() {
  //   return this.props.products.filter((product) => {
  //     if (this.state.onlyDisplayStockedProducts && !product.stocked) {
  //       return false;
  //     }
  //     return product.name
  //       .toLowerCase()
  //       .includes(this.state.searchQuery.toLowerCase());
  //   });
  // }

  render() {
    // const products = this.filteredProducts;
    const products = this.props.products.filter((product) => {
      if (this.state.onlyDisplayStockedProducts && !product.stocked) {
        return false;
      }
      return product.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          query={this.state.searchQuery}
          handleInputChange={this.updateSearchQuery}
          onlyAllowStocked={this.state.onlyDisplayStockedProducts}
          handleCheckboxChange={this.updateDisplayStockedProducts}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
