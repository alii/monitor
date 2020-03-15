import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  min-width: 400px;

  padding-right: 10px;
  padding-bottom: 20px;

  box-sizing: border-box;

  input {
    ${props => props.theme.input}
  }

  > span {
    font-size: 85%;
    color: ${props => props.theme.muted};
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

const FormGroup = props => {
  return (
    <Container>
      <span>{props.label}</span>
      {props.children}
    </Container>
  );
};

FormGroup.propTypes = { children: PropTypes.any, label: PropTypes.string };

export default FormGroup;
