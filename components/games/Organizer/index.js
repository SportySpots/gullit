import React from 'react';
import { propType } from 'graphql-anywhere';
import { Flex } from 'rebass';
import userNameAvatarFragment from '../../../GraphQL/Users/Fragments/userNameAvatar';
import Text from '../../common/Text';
import Avatar from '../../common/Avatar';
import Spacer from '../../common/Spacer';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Organizer = ({ organizer, ...rest }) => (
  <Flex alignItems="center">
    <Avatar size="S" user={organizer} />
    <Spacer row size="M" />
    <Text {...rest}>
      {organizer.name}
    </Text>
  </Flex>
);

Organizer.propTypes = {
  organizer: propType(userNameAvatarFragment).isRequired,
  // Plus all props from Text comp
};

export default Organizer;
