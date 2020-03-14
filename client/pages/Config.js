import React from 'react';
import FormGroup from '../components/FormGroup';

/**
 * Configuration Page
 */
const Config = () => {
  const update = () => console.log('updated');

  return (
    <div>
      <FormGroup update={update}>
        <input type="text" />
      </FormGroup>
    </div>
  );
};

export default Config;
