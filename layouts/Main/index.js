import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Header from '../Header';
import Download from '../Download';
import Footer from '../Footer';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Flex)`
  min-height: 100vh;
  width: 100%;
  padding-top: 60px; /* Header height. See Header */
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Main = ({ children }) => (
  <Container flexDirection="column">
    <Header />
    <Box flex="1" bg="concrete">
      {children}
    </Box>
    <Download />
    <Footer />
  </Container>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
