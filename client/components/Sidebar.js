import React from 'react';
import styled from 'styled-components';

import Button from './sidebar/SidebarButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SidebarStyled = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding-right: 10px;

  transition: ${props => props.theme.transition};

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Top = styled.div`
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 90%;
    margin-top: 5px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Top>
        <h2>Shopify Monitor</h2>
        <a href="https://github.com/aabbccsmith/shopify-monitor" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> A Community project
        </a>
      </Top>
      <Button to={'/'} text="Home" />
      <Button to={'/products'} text="Products" />
      <Button to={'/config'} text="Config" />
    </SidebarStyled>
  );
};

export default Sidebar;
