import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon = true, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-between px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-aster-pink text-aster-black border border-aster-black hover:bg-white hover:shadow-lg",
    outline: "bg-transparent border border-aster-black text-aster-black hover:bg-aster-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;