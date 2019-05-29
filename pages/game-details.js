import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Text, Flex } from 'rebass';

import GET_GAME_DETAILS from '../GraphQL/Games/Queries/GET_GAME_DETAILS';
import Spacer from '../components/common/Spacer';
import GameDate from '../components/games/GameDate';
import GameDetails from '../components/games/GameDetails';
import GameDescription from '../components/games/GameDescription';
import Attendees from '../components/games/Attendees';

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

          const { game } = data;
          console.log('game', game);

          const childProps = { game };

          return (
            <Flex flexDirection="column">
              <GameDate {...childProps} />
              <Spacer size="L" />
              <GameDetails {...childProps} />
              <Spacer size="L" />
              <GameDescription {...childProps} />
              <Spacer size="L" />
              <Attendees {...childProps} />
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
