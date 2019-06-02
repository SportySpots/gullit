import React from 'react';
import { propType } from 'graphql-anywhere';
import moment from 'moment';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import { APP_WIDTH } from '../../../constants';
import gameDetailsFragment from '../../../GraphQL/Games/Fragments/gameDetails';
import { getSpotImages } from '../../../utils';
import Text from '../../common/Text';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const HEIGHT = 192;
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Relative = styled(Box)`
  position: relative;
  overflow: hidden;
  height: ${HEIGHT}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.silver};
`;
//------------------------------------------------------------------------------
const AbsoluteDate = styled(Flex)`
  position: absolute;
  border-bottom-right-radius: 8px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class GameDate extends React.PureComponent {
  state = {
    windowWidth: APP_WIDTH,
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth }); // eslint-disable-line
  }

  render() {
    const { game } = this.props;
    const { windowWidth } = this.state;
    console.log('windowWidth', windowWidth);

    const {
      spot,
      start_time: startTime,
      // status,
      // organizer,
      // sport,
      // name,
    } = game;

    console.log('game', game);

    // const isCanceled = status === 'CANCELED';
    // const attendees = getAttendees(game.attendees);
    const day = moment.utc(startTime).local().format('D');
    const month = moment.utc(startTime).local().format('MMMM');
    // const cardHeight = (isCanceled ? CARD_HEIGHT_CANCELED : CARD_HEIGHT) + Avatar.size('S');
    // * (!!attendees && attendees.length > 0);

    const imgWidth = Math.min(APP_WIDTH, windowWidth) - 16; // remove horizontal padding

    const imgs = getSpotImages({ // always return an image
      images: spot.images || [],
      height: HEIGHT,
      width: imgWidth,
    });

    return (
      <Relative>
        <AbsoluteDate
          flexDirection="column"
          alignItems="center"
          bg="actionYellow"
          p={2}
        >
          <Text
            fontSize={[4]}
            fontWeight="900"
            color="white"
          >
            {day}
          </Text>
          <Text
            fontSize={[3]}
            fontWeight="900"
            color="white"
          >
            {month}
          </Text>
        </AbsoluteDate>
        <img
          src={imgs[0]}
          alt={spot.name}
          height={HEIGHT}
          width={imgWidth}
        />
      </Relative>
    );
  }
}

GameDate.propTypes = {
  game: propType(gameDetailsFragment).isRequired,
};

export default GameDate;
