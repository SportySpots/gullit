import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import BurgerButton from '../BurgerButton';

const Container = styled(Flex)`
  /* height: 80px; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.shade}
`;

const Header = () => (
  <Container justifyContent="space-between">
    <Box>
      Logo
    </Box>
    <Box>
      <BurgerButton />
    </Box>
  </Container>
);

export default Header;
