import React from 'react';
import FormGroup from '../components/FormGroup';

/**
 * Configuration Page
 */
const Config = () => {
  return (
    <div>
      <FormGroup label="Default Timeout">
        <input type="text" />
      </FormGroup>
      <FormGroup label="Default Timeout">
        <input type="text" />
      </FormGroup>
    </div>
  );
};

export default Config;
