import React from 'react';

import Link from 'next/link';

import { ApolloProvider, Query, graphql } from 'react-apollo';

import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST';
import client from '../GraphQL/ApolloClient';
import withData from '../GraphQL/withData';


const GamesComponent = ({ games }) => (
  !games ? null : games.map(game => (
    <div key={game.uuid}>
      <Link as={`/games?uuid=${game.uuid}`} href={`/games/${game.uuid}`}>
        <a>{JSON.stringify(game)}</a>
      </Link>
    </div>
  ))
);

class Games extends React.Component {
  // static async getInitialProps(props) {
  //   console.log('INITIAL PROPS', props);
  //   return {};
  // }

  componentWillMount() {
    console.log('mounted', !!this.props.data.games);
  }

  render() {
    // console.log('render', this.props.data);
    if (!this.props.data.games) { return null; }

    return (
        <div>
          {this.props.data.games.length}
          <GamesComponent games={this.props.data.games} />
        </div>
    );
  }
}

export default graphql(GET_GAMES_LIST)(Games);
// export default (props) => <div>test</div>
