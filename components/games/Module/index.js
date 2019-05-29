import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading } from 'rebass';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Box)`
  border-radius: 8px;
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Module = ({ title, children }) => (
  <Container bg="white" p={3}>
    <Heading
      fontFamily="raj"
      // fontSize={4}
      // fontWeight={900}
      as="h3"
    >
      {title}
    </Heading>
    {children}
  </Container>
);

Module.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Module.defaultProps = {
  title: '',
};

export default Module;
