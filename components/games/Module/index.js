import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';

import Text from '../../common/Text';

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
    <Text
      as="h3"
      fontSize={[5]}
      fontWeight="700"
      mt={0}
    >
      {title}
    </Text>
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
