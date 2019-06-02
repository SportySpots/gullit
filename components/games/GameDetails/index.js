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
import Spacer from '../../common/Spacer';
import Organizer from '../Organizer';

const { publicRuntimeConfig } = getConfig();

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const MAP_HEIGHT = 180;
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
`;
//------------------------------------------------------------------------------
const Img = styled.img`
  height: ${MAP_HEIGHT}px;
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
      end_time: endTime,
      sport,
      name,
      organizer,
    } = game;

    const formattedStartTime = `${moment.utc(startTime).local().format('dddd, MMMM D, YYYY, HH:mm')} - ${moment.utc(endTime).local().format('HH:mm')}`;
    const mapWidth = Math.min(APP_WIDTH, windowWidth) - 16; // remove horizontal padding
    const tdTextProps = {
      fontSize: [4],
      fontWeight: 600,
      pl: 3,
    };

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
                <td><Text {...tdTextProps}>{sport.name}</Text></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Spacer size="M" />
                </td>
              </tr>
              <tr>
                <td><Icon name="watch_later" size={24} color="black" /></td>
                <td><Text {...tdTextProps}>{formattedStartTime}</Text></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Spacer size="M" />
                </td>
              </tr>
              <tr>
                <td><Icon name="place" size={24} color="black" /></td>
                <td><Text {...tdTextProps}>{spot.name}</Text></td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Img
          src={`https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${spot.address.lat},${spot.address.lng}&size=${mapWidth}x${MAP_HEIGHT}&zoom=13&key=${publicRuntimeConfig.googleMapsKey}`}
          alt="map"
          height={MAP_HEIGHT}
          width={mapWidth}
        />

        <Box p={3}>
          <Text
            as="h4"
            fontSize={[4]}
            fontWeight="700"
            mt={0}
          >
            Hosted by
          </Text>
          <Organizer
            organizer={organizer}
            fontSize={[4]}
            fontWeight="600"
          />
        </Box>
      </Container>
    );
  }
}

GameDetails.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDetails;
