import React, { Component } from 'react';
import Link from 'next/link';

import '../../styles/main.scss';
export class Header extends Component {
  render() {
    return (
      <nav>
        <p className="customClass">I am styled from a file</p>
        <Link href="/">
          <a>Home | </a>
        </Link>
        <Link href="/blogs">
          <a>Blog | </a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios | </a>
        </Link>
        <Link href="/about">
          <a>About | </a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <style jsx>
          {`
            nav {
              list-style-type: none;

              margin: 0;
              padding: 0;
            }
            nav a {
              text-decoration: none !important;
            }
            a {
              font-size: 20px;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Header;
