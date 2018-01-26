import React from 'react';
import Link from 'gatsby-link';

// images
import logo from '../img/logo.svg';

// components
import DownloadButton from '../../components/DownloadButton';
import DownloadLink from '../../components/DownloadLink';

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
      Home
      </Link>

      <DownloadLink content="header">
        <DownloadButton float="right">
          Download Git
        </DownloadButton>
      </DownloadLink>
    </div>
  </header>
);

export default Header;
