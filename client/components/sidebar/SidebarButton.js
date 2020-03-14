import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';
import { themedShadeColor } from '../../functions/color';

const StyledLink = styled(Link)`
  padding: 15px 20px;
  display: block;
  width: 100%;
  text-align: left;
  position: relative;

  &:after {
    border-radius: 3px 3px 0 0;
    bottom: 0;
    content: '';
    display: block;
    height: 0;
    position: absolute;

    left: -4px;
    width: 100%;

    transition: ${props => props.theme.transition};
  }

  &.active {
    &:after {
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      height: 100%;
      width: 100%;
      background: ${props => themedShadeColor(props.theme.bg, -20)};

      border-top-right-radius: 2em;
      border-bottom-right-radius: 2em;
    }
  }
`;

const SidebarButton = props => {
  // eslint-disable-next-line react/prop-types
  const { text, to } = props;

  return (
    <StyledLink to={to} exact>
      {text}
    </StyledLink>
  );
};

export default SidebarButton;
