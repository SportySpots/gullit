import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

const Container = styled(Flex)`
  border-top: 1px solid ${({ theme }) => theme.colors.shade}
`;

const Footer = () => (
  <Container
    justifyContent="space-between"
    bg="dusk"
  >
    <Box color="white">
      I&apos;m the footer
    </Box>
  </Container>
);

export default Footer;
