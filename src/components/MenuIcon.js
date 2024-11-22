// src/components/MenuIcon.js
import React from 'react';

const MenuIcon = ({ icon, active, onClick }) => (
  <div 
    className={`
      p-3 rounded-lg cursor-pointer transition-all duration-300 
      ${active ? 'bg-blue-700 text-white' : 'hover:bg-blue-800'}
    `}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default MenuIcon;
