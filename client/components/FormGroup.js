import React from 'react';
import styled from 'styled-components';
import { themedShadeColor } from '../functions/color';

const Container = styled.div`
  input {
    ${props => props.theme.input}

    &:active {
      border: 1px solid ${props => props.theme.accent};
    }

    &:focus {
      background: ${props => themedShadeColor(props.theme.bg, -5)};
    }
  }
`;

const FormGroup = props => {
  return <Container>{props.children}</Container>;
};

export default FormGroup;
