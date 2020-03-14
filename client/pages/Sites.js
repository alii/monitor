import React from 'react';
import useFetch from 'use-http';

/**
 * Sites page
 */
const Sites = () => {
  const { loading, data: sites } = useFetch('/api/getSites', []);

  return <div>{loading ? 'Loading' : JSON.stringify(sites)}</div>;
};

export default Sites;
