import React from 'react';
import { Box } from 'rebass';

const Divider = (props) => (
  <Box
    {...props}
    as="hr"
    bg="gray"
    style={{ border: 0, height: 2 }}
  />
);

export default Divider;
