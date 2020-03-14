import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const SidebarButton = props => {
  const { text, to } = props;

  return (
    <Link className={'sidebar-button'} to={to} exact>
      {text}
    </Link>
  );
};

export default SidebarButton;
