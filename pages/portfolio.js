import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/shared/layouts/BaseLayout';

export class Portfolio extends Component {
  render() {
    return (
      <BaseLayout>
        <h1>The Portfolio Page</h1>
        <h2>{this.props.router.query.id}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
