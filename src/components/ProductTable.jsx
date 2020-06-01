import React from 'react';

import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <ProductRow
            // name={product.name}
            // stocked={product.stocked}
            // price={product.price}
            // category={product.category}
            // Avoiding accessing each prop individually
            {...product}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
