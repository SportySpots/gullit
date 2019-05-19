import React from 'react';
// import PropTypes from 'prop-types';
import { propType } from 'graphql-anywhere';
import { Flex, Text } from 'rebass';
// import Fonts from '../../../Themes/Fonts';
import userNameAvatarFragment from '../../../GraphQL/Users/Fragments/userNameAvatar';
// import Text from '../../Common/Text';
import Avatar from '../../common/Avatar';
import Spacer from '../../common/Spacer';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Organizer = ({ organizer /* , textSize */ }) => (
  <Flex alignItems="center">
    <Avatar size="S" user={organizer} />
    <Spacer row size="M" />
    <Text
      // size={textSize}
      fontFamily="raj"
    >
      {organizer.name}
    </Text>
  </Flex>
);

Organizer.propTypes = {
  organizer: propType(userNameAvatarFragment).isRequired,
  // textSize: PropTypes.oneOf(Object.keys(Fonts)),
};

// Organizer.defaultProps = {
//   textSize: 'SM',
// };

export default Organizer;
