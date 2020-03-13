import * as React from 'react';
import useFetch from 'use-http';

const App: React.FC = () => {
  const { data, loading } = useFetch('/api/getSites', []);
  return <div className="container">{loading ? <p>Loading</p> : 'Sites: ' + JSON.stringify(data.sites)}</div>;
};

export default App;
