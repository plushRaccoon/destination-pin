import { FC } from 'react';
import './footer.css';
import React from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Destination Pin</p>
      </div>
      <div className="footer-link">
        <a href="https://github.com/plushRaccoon/destination-pin" className="git-link">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
