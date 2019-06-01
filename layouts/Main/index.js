import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Header from '../Header';
import Download from '../Download';
import Footer from '../Footer';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Outer = styled(Flex)`
  min-height: 100vh;
  width: 100%;
  padding-top: 60px; /* Header height. See Header */
`;
//------------------------------------------------------------------------------
const Inner = styled(Box)`
  width: 100%;
  max-width: 540px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Main = ({ children }) => (
  <Outer
    flexDirection="column"
    alignItems="center"
    bg="concrete"
  >
    <Header />
    <Inner flex="1" p="2">
      {children}
      <Download />
    </Inner>
    <Footer />
  </Outer>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
