import React, { Component } from "react";
import BaseLayout from "../components/shared/layouts/BaseLayout";
import axios from "axios";
import { Link } from "../routes";

export class Portfolios extends Component {
  static async getInitialProps() {
    let posts = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data.splice(0, 10);
    } catch (err) {
      console.log(err);
    }

    return { posts: posts };
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>My Portfolios</h1>
        <ul>{this.displayPosts(posts)}</ul>
      </BaseLayout>
    );
  }

  displayPosts(posts) {
    return posts.map(post => (
      <li key={post.id}>
        <Link route={`/portfolio/${post.id}`}>
          <a style={{ fontSize: "20px" }}>{post.title}</a>
        </Link>
      </li>
    ));
  }
}

export default Portfolios;
