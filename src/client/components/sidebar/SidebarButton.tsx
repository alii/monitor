import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';

interface Props {
  text: String;
  to: String;
}

function SidebarButton(props: Props) {
  const { text, to } = props;

  return (
    <Link className={'sidebar-button'} to={to} exact>
      {text}
    </Link>
  );
}

export default SidebarButton;
