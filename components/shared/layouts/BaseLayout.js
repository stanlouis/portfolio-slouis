import React from 'react';
import Header from '../Header';

const BaseLayout = props => (
  <React.Fragment>
    <Header />
    {props.children}
  </React.Fragment>
);

export default BaseLayout;
