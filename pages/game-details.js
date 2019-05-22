import React from 'react';

class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    return {};
  }

  render() {
    return <h1>Game Details</h1>;
  }
}

export default Post;
