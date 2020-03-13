import * as React from 'react';
import useFetch from 'use-http';

const App: React.FC = () => {
  const { data, loading } = useFetch('/api/getSites', []);
  return (
    <div>
      {loading && "Loading..."}
      {data}
    </div>
  );
};

export default App;
