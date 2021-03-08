import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  small: `py-1 px-2`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, onClick }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
