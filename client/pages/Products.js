import React from 'react';
import useFetch from 'use-http';

/**
 * Products page
 */
const Products = () => {
  const { loading, data: res } = useFetch(
    '/api/getProducts',
    { data: { error: true, message: 'Unknown client error' } },
    [],
  );

  if (loading) return <p>Loading</p>;

  return (
    <>
      {res.data.map(product => {
        return <p key={product.name}>{product.name}</p>;
      })}
    </>
  );
};

export default Products;
