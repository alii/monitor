import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';

/**
 * Products page
 */
const Products = () => {
  const { loading, data: products } = useFetch('/api/getProducts', { data: {} }, []);
  return (
    <div>
      {loading && 'Loading...'}
      {JSON.stringify(products)}
    </div>
  );
};

export default Products;
