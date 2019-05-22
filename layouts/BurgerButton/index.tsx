import React from 'react';
import { Button } from 'rebass';
import Divider from '../../components/common/Divider';

const divStyle = { margin: 4 };

const BurgerButton = () => (
  <Button
    bg="transparent"
    width={60}
  >
    <Divider style={divStyle} />
    <Divider style={divStyle} />
    <Divider style={divStyle} />
  </Button>
);

export default BurgerButton;
