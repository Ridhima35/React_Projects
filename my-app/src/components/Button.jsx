import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "w-full py-3.5 rounded-md font-medium text-[16px] transition-colors flex items-center justify-center";
  const variants = {
    primary: "bg-popx-primary text-white hover:bg-purple-700",
    secondary: "bg-popx-primary-light text-popx-text hover:bg-popx-primary-light/80",
    disabled: "bg-popx-border text-white cursor-not-allowed"
  };

  return (
    <button 
      onClick={onClick}
      disabled={variant === 'disabled'}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
