import React, { Component } from 'react';
import BaseLayout from '../components/shared/layouts/BaseLayout';
import axios from 'axios';

export class Index extends Component {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      console.log(response.data);
      userData = response.data;
    } catch (e) {
      console.log(e);
    }

    return { initialData: [1, 2, 3], userData };
  }
  render() {
    const { userData, initialData } = this.props;
    return (
      <BaseLayout>
        <p>Hello Next.js</p>
        <p>{userData.title}</p>
      </BaseLayout>
    );
  }
}

export default Index;
