import React from 'react';
import { propType } from 'graphql-anywhere';
import { Flex } from 'rebass';
import gameFragment from '../../../GraphQL/Games/Fragments/game';
import Avatar from '../../common/Avatar';
import CappedList from '../../common/CappedList';
import Spacer from '../../common/Spacer';
import getPixelsFromSize from '../../common/Spacer/utils';
import { getAttendees } from '../utils';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const SPACER_SIZE = 'M';
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class Attendees extends React.PureComponent {
  // state = {
  //   width: 0,
  // }

  // handleLayout = ({ nativeEvent }) => {
  //   this.setState({ width: nativeEvent.layout.width });
  // }

  render() {
    const { game } = this.props;
    // const { width } = this.state;
    const width = 300; // Card width

    const attendees = getAttendees(game.attendees);

    if (attendees.length === 0) {
      return null;
    }

    // Determine how many avatars fit on the parent container
    const AVATAR_SIZE = Avatar.size('S');
    let maxAvatars = 0;

    if (AVATAR_SIZE <= width) {
      maxAvatars = 1;
    }

    const diff = width - AVATAR_SIZE; // remove first avatar. Then we can only add space + avatar
    const space = getPixelsFromSize(SPACER_SIZE);
    if (diff > 0) {
      maxAvatars = 1 + parseInt(diff / (space + AVATAR_SIZE), 10);
    }

    return (
      <Flex>
        <CappedList
          max={maxAvatars}
          data={attendees}
          keyExtractor={({ user }) => (user.uuid)}
          component={({ user }) => <Avatar size="S" user={user} />}
          capComponent={({ data }) => <Avatar key="cap" size="S" text={`+${data.length}`} />}
          ItemSeparatorComponent={() => <Spacer row size={SPACER_SIZE} />}
        />
      </Flex>
    );
  }
}

Attendees.propTypes = {
  game: propType(gameFragment).isRequired,
};

export default Attendees;
