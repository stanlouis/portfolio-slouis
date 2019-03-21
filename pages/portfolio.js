import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import BaseLayout from "../components/shared/layouts/BaseLayout";

export class Portfolio extends Component {
  static async getInitialProps({ query }) {
    const portfolioId = query.id;
    let portfolio = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      );
      portfolio = response.data;
    } catch (err) {
      console.log(err);
    }

    return { portfolio };
  }
  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>The Portfolio Page</h1>
        <h2>Title: {portfolio.title}</h2>
        <p>ID: {portfolio.id}</p>
        <p>Message: {portfolio.body}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
