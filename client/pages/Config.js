import React from 'react';
import FormGroup from '../components/FormGroup';
import styled from 'styled-components';

const SaveButton = styled.button`
  ${props => props.theme.button}
`;

/**
 * Configuration Page
 */
const Config = () => {
  return (
    <>
      <FormGroup label="Default Timeout">
        <input type="text" />
      </FormGroup>
      <FormGroup label="Default Webhook">
        <input type="text" placeholder="https://discordapp.com/api/webhook/..." />
      </FormGroup>
      <FormGroup label="Save Settings">
        <SaveButton>Save</SaveButton>
      </FormGroup>
    </>
  );
};

export default Config;
