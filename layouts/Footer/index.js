import React from 'react';
import { Flex, Box } from 'rebass';
// import styled from 'styled-components';
import { Icon } from 'microicon';

import Text from '../../components/common/Text';
import Spacer from '../../components/common/Spacer';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
// const Container = styled(Flex)`
//   border-top: 1px solid ${({ theme }) => theme.colors.shade};
// `;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Footer = () => (
  <Box width="100%">
    <Box bg="dusk" p={4}>
      <Text
        color="white"
        fontSize={[2]}
        fontWeight="600"
      >
        About Sportyspots
      </Text>
    </Box>
    <Box bg="concrete" p={4}>
      <Text
        color="black"
        fontSize={[3]}
        fontWeight="600"
        textAlign="center"
      >
        You can always contact us via
      </Text>
      <Spacer size="M" />
      <Flex alignItems="center" justifyContent="center">
        <Icon name="email" size={24} color="black" />
        <Spacer row size="L" />
        <Text
          color="black"
          fontSize={[3]}
          fontWeight="600"
        >
          hello@sportyspots.com
        </Text>
      </Flex>
    </Box>
    <Flex
      bg="white"
      alignItems="center"
      justifyContent="center"
      p={3}
    >
      <Box>
        <img
          src="/static/sportyspots-logo.png"
          alt="placeholder"
          height="22"
        />
      </Box>
    </Flex>
  </Box>
);

export default Footer;
