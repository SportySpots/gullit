import React from 'react';
import { propType } from 'graphql-anywhere';
import { Box } from 'rebass';
import styled from 'styled-components';
import { Icon } from 'microicon';
import moment from 'moment';
import getConfig from 'next/config';

import { APP_WIDTH } from '../../../constants';
import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import Text from '../../common/Text';
import Organizer from '../Organizer';

const { publicRuntimeConfig } = getConfig();

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const HEIGHT = 160;
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
`;
//------------------------------------------------------------------------------
const Img = styled.img`
  height: ${HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.silver};
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class GameDetails extends React.PureComponent {
  state = {
    windowWidth: APP_WIDTH,
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth }); // eslint-disable-line
  }

  render() {
    const { game } = this.props;
    const { windowWidth } = this.state;

    const {
      spot,
      start_time: startTime,
      sport,
      name,
      organizer,
    } = game;

    const formattedStartTime = moment.utc(startTime).local().format('D-MM HH:mm');
    const mapWidth = Math.min(APP_WIDTH, windowWidth) - 16; // remove horizontal padding

    return (
      <Container bg="white">
        <Box p={3}>
          <Text
            as="h3"
            fontSize={[5]}
            fontWeight="700"
            mt={0}
          >
            {name}
          </Text>

          <table>
            <tbody>
              <tr>
                <td><Icon name="label" size={24} color="black" /></td>
                <td><Text>{sport.name}</Text></td>
              </tr>
              <tr>
                <td><Icon name="watch_later" size={24} color="black" /></td>
                <td><Text>{formattedStartTime}</Text></td>
              </tr>
              <tr>
                <td><Icon name="place" size={24} color="black" /></td>
                <td><Text>{spot.name}</Text></td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Img
          src={`https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${spot.address.lat},${spot.address.lng}&size=${mapWidth}x${HEIGHT}&zoom=13&key=${publicRuntimeConfig.googleMapsKey}`}
          alt="map"
          height={HEIGHT}
          width={mapWidth}
        />

        <Box p={3}>
          <Text
            as="h4"
            fontSize={2}
            // fontWeight={600}
          >
            Hosted by
          </Text>
          <Organizer organizer={organizer} />
        </Box>
      </Container>
    );
  }
}

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
