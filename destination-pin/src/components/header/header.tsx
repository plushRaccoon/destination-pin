import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Button from '../button/button';

type HeaderProps = {
  fullView: boolean;
};

const Header: FC<HeaderProps> = ({ fullView }) => {
  if (fullView) {
    return (
      <header className="header">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src="../../logo.svg" alt="Destination Pin Logo" />
            <p className="logo-name">Destination Pin</p>
          </div>
        </Link>

        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="#">Explore</Link>
            </li>
          </ul>
        </nav>

        <div className="auth-links">
          <Button text="Sign In" redirectTo="/signin" onClick={() => console.log('Sign In button clicked')} />
          <Button text="Sign Up" redirectTo="/signup" onClick={() => console.log('Sign up button clicked')} />
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src="../../logo.svg" alt="Destination Pin Logo" />
            <p className="logo-name">Destination Pin</p>
          </div>
        </Link>
      </header>
    );
  }
};

export default Header;
