import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Container = styled(Flex)`
  min-height: 100vh;
  width: 100%;
`;

const Main = ({ children }) => (
  <Container flexDirection="column">
    <Header />
    <Box flex="1" bg="concrete">
      {children}
    </Box>
    <Footer />
  </Container>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
