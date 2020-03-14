import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  input {
    ${props => props.theme.input}
  }
`;

const FormGroup = props => {
  return <Container>{props.children}</Container>;
};

export default FormGroup;
