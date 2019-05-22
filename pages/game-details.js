import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Text, Flex } from 'rebass';

import GET_GAME_DETAILS from '../GraphQL/Games/Queries/GET_GAME_DETAILS';
import GameDate from '../components/games/GameDate';
import GameDetails from '../components/games/GameDetails';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class GameDetailsPage extends React.Component {
  static async getInitialProps({ query }) {
    const { uuid } = query;
    return { uuid };
  }

  render() {
    const { uuid } = this.props;

    return (
      <Query
        query={GET_GAME_DETAILS}
        variables={{ uuid }}
        // fetchPolicy="cache-and-network"
      >
        {({
          loading,
          error,
          data,
          // refetch,
          // fetchMore,
        }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) {
            console.log(error);
            return <Text>Something went wrong</Text>;
          }

          return (
            <Flex flexDirection="column">
              <GameDate game={data.game} />
              <GameDetails game={data.game} />
            </Flex>
          );
        }}
      </Query>
    );
  }
}

GameDetailsPage.propTypes = {
  uuid: PropTypes.string.isRequired,
};

export default GameDetailsPage;
