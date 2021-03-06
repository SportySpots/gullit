import React from 'react';
import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import styled from 'styled-components';
import moment from 'moment';
import { Icon } from 'microicon';
import {
  Flex,
  // Box,
  // Image,
  Card,
  Text,
} from 'rebass';
import gameFragment from '../../../GraphQL/Games/Fragments/game';
// import colors from '../../../theme/colors';
// import I18n from '../../../I18n';
import { getSpotImages } from '../../../utils';
// import Text from '../../Common/Text';
import DotSpacer from '../../common/DotSpacer';
import Spacer from '../../common/Spacer';
// import Row from '../../Common/Row';
// import Icon from '../../Common/Icon';
import Avatar from '../../common/Avatar';
// import BackgroundImage from '../../Spots/BackgroundImage';
import Organizer from '../Organizer';
import Attendees from '../Attendees';
// import GameCanceledFlag from '../GameCanceledFlag';
import { getAttendees } from '../utils';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const CARD_HEIGHT = 192;
const CARD_HEIGHT_CANCELED = 252;
const CARD_WIDTH = 300;
const HEADER_HEIGHT = 58;
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
// const Outer = styled.div`
//   height: ${({ height }) => height}px;
//   border-radius: 8px;
//   shadow-offset: 1px 1px;
//   shadow-color: ${({ theme }) => theme.colors.shade};
//   shadow-opacity: 0.8;
//   elevation: 2;
// `;
//------------------------------------------------------------------------------
const Top = styled(Flex)`
  height: ${HEADER_HEIGHT}px;
  /* padding-horizontal: 16px; */
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
//------------------------------------------------------------------------------
const Bottom = styled.div`
  /* position: relative; */
  /* height: ${({ height }) => height}px; */
  height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  /* background-color: ${({ theme }) => theme.colors.transparent}; */

  background-image: url(${({ img }) => img});
  background-color: ${({ theme }) => theme.colors.darkGreen};
  /* background-position: 70%; */
`;
//------------------------------------------------------------------------------
// const BgImg = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   /* height: ${({ height }) => height}px; */
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
//   background-image: url(${({ img }) => img});
//   background-color: ${({ theme }) => theme.colors.darkGreen};
//   background-position: 20%;
//   z-index: -2;
// `;
//------------------------------------------------------------------------------
// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: ${({ theme }) => theme.colors.black};
//   opacity: 0.5;
//   border-bottom-left-radius: ${({ top }) => (top ? 0 : 8)}px;
//   border-bottom-right-radius: ${({ top }) => (top ? 0 : 8)}px;
//   border-top-left-radius: ${({ top }) => (top ? 8 : 0)}px;
//   border-top-right-radius: ${({ top }) => (top ? 8 : 0)}px;
//   z-index: -1;
// `;
//------------------------------------------------------------------------------
const Inner = styled.div`
  /* flex: 1;
  justify-content: flex-end; */
  height: 100%;
  padding: 16px;
`;
//------------------------------------------------------------------------------
// const iconStyle = { backgroundColor: colors.transparent };
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const GameCard = ({ game, onClick }) => {
  const {
    spot,
    start_time: startTime,
    status,
    organizer,
    sport,
    name,
  } = game;

  console.log('game', game);

  const isCanceled = status === 'CANCELED';
  const attendees = getAttendees(game.attendees);
  const formattedStartTime = moment.utc(startTime).local().format('D-MM HH:mm');
  const cardHeight = (isCanceled ? CARD_HEIGHT_CANCELED : CARD_HEIGHT) + Avatar.size('S');
  // * (!!attendees && attendees.length > 0);

  const bgImgHeight = cardHeight - HEADER_HEIGHT;
  const imgs = getSpotImages({
    images: spot.images || [],
    height: bgImgHeight,
    width: CARD_WIDTH,
  });

  return (
    <Card
      bg="transparent"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      m={2}
      style={{ maxWidth: CARD_WIDTH, width: '100%', overflow: 'hidden' }}
      height={cardHeight}
      onClick={onClick}
    >
      <Top
        alignItems="center"
        px={3}
      >
        <Organizer organizer={organizer} textSize="M" />
        <DotSpacer />
        <Text
          size="M"
          fontFamily="raj"
        >
          {sport.category}
        </Text>
      </Top>
      <Bottom
        // height={bgImgHeight}
        img={imgs && imgs.length > 0 ? imgs[0] : null}
      >
        {/* <BgImg img={imgs && imgs.length > 0 ? imgs[0] : null} />
        <Overlay /> */}
        {/* <BackgroundImage
          images={spot.images}
          height={cardHeight - HEADER_HEIGHT}
          width={CARD_WIDTH}
        /> */}
        {isCanceled && (
          <React.Fragment>
            <Spacer size="L" />
            {/* <GameCanceledFlag /> */}
          </React.Fragment>
        )}
        <Inner>
          <Text
            fontFamily="raj"
            size="ML"
            color="white"
            // numberOfLines={2}
            fontSize={3}
            fontWeight={600}
          >
            {name}
          </Text>
          <Spacer size="M" />
          <Flex alignItems="center">
            <Icon name="schedule" size={24} color="white" />
            <Spacer row size="M" />
            <Text
              fontFamily="raj"
              size="SM"
              color="white"
            >
              {formattedStartTime}
            </Text>
            <Spacer row size="L" />
            <Icon name="place" size={24} color="white" />
            <Spacer row size="M" />
            <Text
              fontFamily="raj"
              size="SM"
              color="white"
            >
              {spot.name}
            </Text>
          </Flex>
          {attendees.length > 0 && (
            <React.Fragment>
              <Spacer size="L" />
              <Attendees attendees={attendees} />
            </React.Fragment>
          )}
        </Inner>
      </Bottom>
    </Card>
  );
};

GameCard.propTypes = {
  game: propType(gameFragment).isRequired,
  onClick: PropTypes.func,
};

GameCard.defaultProps = {
  onClick: () => {},
};

export default GameCard;
