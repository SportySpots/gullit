import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'rebass';
// import Text from '../Text';
import getPixelsFromSize from './utils';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled.div`
  margin: 0 ${({ size }) => (getPixelsFromSize(size))}px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const DotSpacer = ({ size }) => (
  <Container size={size}>
    <Text
      size="M"
      fontSize={4}
      color="shade"
      fontFamily="raj"
    >
      ·
    </Text>
  </Container>
);

DotSpacer.propTypes = {
  size: PropTypes.oneOf(['S', 'M', 'L']),
};

DotSpacer.defaultProps = {
  size: 'M',
};

export default DotSpacer;
