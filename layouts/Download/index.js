import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import styled from 'styled-components';

import Spacer from '../../components/common/Spacer';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const WIDTH = 180;
//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Flex)`
  width: 100%;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Download = () => (
  <Container
    alignItems="center"
    flexDirection="column"
    bg="transparent"
  >
    <Heading
      fontFamily="raj"
      // fontSize={4}
      // fontWeight={900}
      as="h3"
      textAlign="center"
    >
      Download the app
    </Heading>
    <Spacer size="XXL" />
    <Box>
      <img
        src="/static/google-play-badge.png"
        alt="Download on Google Play"
        width={WIDTH - 2}
      />
    </Box>
    <Spacer size="XL" />
    <Box>
      <img
        src="/static/apple_store_badge.svg"
        alt="Download on Apple Store"
        width={WIDTH}
      />
    </Box>
  </Container>
);

export default Download;
