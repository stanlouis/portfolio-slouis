import React, { Component } from 'react';
import Link from 'next/link';

export class Header extends Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <a>Home | </a>
        </Link>
        <Link href="/blogs">
          <a>Blog | </a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio | </a>
        </Link>
        <Link href="/about">
          <a>About | </a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </nav>
    );
  }
}

export default Header;
