import React from 'react';
import useFetch from 'use-http';

/**
 * Products page
 */
const Products = () => {
  const { loading, data: products } = useFetch(
    '/api/getProducts',
    { data: { error: true, message: 'Unknown client error' } },
    [],
  );
  return <div>{loading ? 'Loading' : JSON.stringify(products, null, 2)}</div>;
};

export default Products;
