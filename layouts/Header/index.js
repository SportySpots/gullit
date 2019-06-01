import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
// import BurgerButton from '../BurgerButton';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shade};
  background-color: ${({ theme }) => theme.colors.white};
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Header = () => (
  <Container
    alignItems="center"
    justifyContent="space-between"
  >
    <Box px="4">
      <img
        src="/static/sportyspots-logo.png"
        alt="placeholder"
        height="35"
      />
    </Box>
    {/* <Box>
      <BurgerButton />
    </Box> */}
  </Container>
);

export default Header;
