import * as React from 'react';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <a
        className="Footer-logo mycrypto"
        target="_blank"
        rel="noopener noreferrer"
        href="https://pyrexcoin.com"
      >
        <Logo />
      </a>
      <div className="flex-spacer" />
      <div className="Footer-main-content">
        <p className="Footer-main-content-text">
        <a href="https://pyrexcoin.com">Pyrexcoin</a> block explorer.<br/>Next generation cryptocurrency
        </p>
      </div>
      <div className="flex-spacer" />
      <div className="Footer-social-media-wrapper">
        <p className="Footer-social-titles">Pyrexcoin</p>
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/pyrexcoin"
          >
            <i className="nc-icon nc-logo-twitter size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/pyrex-coin"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
