import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';
import { userToInitials, convertS3ToImgix, getSize } from './utils';

// ------------------------------------------------------------------------------
// AUX FUNCTIONS:
// ------------------------------------------------------------------------------
const setSize = ({ size }) => getSize(size);
// ------------------------------------------------------------------------------
// STYLE:
// ------------------------------------------------------------------------------
const Circle = styled.div`
  width: ${setSize}px;
  height: ${setSize}px;
  border-radius: ${setSize}px;
  background-color: ${({ theme, bgColor }) => (theme.colors[bgColor] || theme.colors.primaryGreen)};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
// ------------------------------------------------------------------------------
const StyledImage = styled.img`
  width: ${setSize}px;
  height: ${setSize}px;
`;
// ------------------------------------------------------------------------------
// COMPONENT:
// ------------------------------------------------------------------------------
class Avatar extends React.PureComponent {
  render() {
    const { user, text, size } = this.props;

    const avatar = (
      user
      && user.profile
      && user.profile.avatar
      && user.profile.avatar.length > 0
    ) ? user.profile.avatar : '';

    // console.log('size', size);
    // console.log('setSize', setSize({ size }));
    // console.log('avatar', avatar);
    // console.log('converted', convertS3ToImgix({ image: avatar, height: size, width: size }));

    if (avatar) {
      return (
        <Circle size={size}>
          <StyledImage
            src={convertS3ToImgix({ image: avatar, height: size, width: size })}
            size={size}
          />
        </Circle>
      );
    }

    const hasName = (
      user
      && user.name
      && user.name.trim().length > 0
    ) || false;

    if (hasName) {
      return (
        <Circle size={size}>
          <Text
            size={size === 'S' ? 'SM' : 'L'}
            color="white"
            center={true}
          >
            {userToInitials(user)}
          </Text>
        </Circle>
      );
    }

    if (text && text.trim().length > 0) {
      return (
        <Circle size={size}>
          <Text
            size={size === 'S' ? 'SM' : 'L'}
            color="white"
            center={true}
          >
            {text}
          </Text>
        </Circle>
      );
    }

    // If no user and no text, display default avatar
    return (
      <Circle bgColor="transparent" size={size}>
        <StyledImage
          src="/static/spot_open_circle.png"
          alt="placeholder"
          size={size}
        />
      </Circle>
    );
  }
}

Avatar.size = getSize;

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profile: PropTypes.shape({
      avatar: PropTypes.string,
    }),
  }),
  text: PropTypes.string,
  size: PropTypes.oneOf(['S', 'L']).isRequired,
};

Avatar.defaultProps = {
  user: null,
  text: '',
};

export default Avatar;
