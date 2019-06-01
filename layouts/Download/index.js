import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import styled from 'styled-components';

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
    justifyContent="center"
    flexDirection="column"
    bg="transparent"
  >
    <Heading
      fontFamily="raj"
      // fontSize={4}
      // fontWeight={900}
      as="h3"
    >
      Download the app
    </Heading>
    <Box>
      <img
        src="/static/google-play-badge.png"
        alt="Download on Google Play"
        width="200"
      />
    </Box>
    <Box>
      <img
        src="/static/apple_store_badge.svg"
        alt="Download on Apple Store"
        width="200"
      />
    </Box>
  </Container>
);

export default Download;
