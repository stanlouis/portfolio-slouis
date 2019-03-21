import React, { Component } from "react";
import BaseLayout from "../components/shared/layouts/BaseLayout";
import { Button, Container } from "reactstrap";

export class Index extends Component {
  static getInitialProps() {
    console.log("From getInitialProps method");
    return {};
  }
  render() {
    return (
      <BaseLayout>
        <Container />
      </BaseLayout>
    );
  }
}

export default Index;
