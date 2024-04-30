import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

type ButtonProps = {
  text: string;
  redirectTo: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, redirectTo }) => {
  return (
    <Link to={redirectTo} className="link">
      <button className="button">{text}</button>
    </Link>
  );
};

export default Button;
