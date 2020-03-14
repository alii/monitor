import * as React from 'react';
import useFetch from 'use-http';

const Products = () => {
  const { loading, data: products } = useFetch('/api/getProducts', []);
  return <div>{loading ? 'Loading' : JSON.stringify(products)}</div>;
};

export default Products;
