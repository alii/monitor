import React from 'react';

import Button from './sidebar/SidebarButton';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex column top">
        <h2>Shopify Monitor</h2>
        <span>By Alistair Smith</span>
      </div>
      <Button to={'/'} text="Home" />
      <Button to={'/products'} text="Products" />
    </div>
  );
};

export default Sidebar;
