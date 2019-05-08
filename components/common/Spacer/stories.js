import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Spacer from '.';

const HorizontalBlock = styled.div`
  height: 100px;
  flex: 1;
  background-color: red;
`;

const VerticalBlock = styled.div`
  flex: 1;
  background-color: red;
`;

storiesOf('common.Spacer', module)
  .add('Spacer size S row', () => (
    <Flex style={{ borderWidth: 1, borderColor: 'blue' }}>
      <HorizontalBlock />
      <Spacer row size="S" />
      <HorizontalBlock />
    </Flex>
  ))
  .add('Spacer size M row', () => (
    <Flex style={{ borderWidth: 1, borderColor: 'blue' }}>
      <HorizontalBlock />
      <Spacer row size="M" />
      <HorizontalBlock />
    </Flex>
  ))
  .add('Spacer size L row', () => (
    <Flex style={{ borderWidth: 1, borderColor: 'blue' }}>
      <HorizontalBlock />
      <Spacer row size="L" />
      <HorizontalBlock />
    </Flex>
  ))
  .add('Spacer size S', () => (
    <Flex
      flexDirection="column"
      style={{ flex: 1, borderWidth: 1, borderColor: 'blue' }}
    >
      <VerticalBlock />
      <Spacer size="S" />
      <VerticalBlock />
    </Flex>
  ))
  .add('Spacer size M', () => (
    <Flex
      flexDirection="column"
      style={{ flex: 1, borderWidth: 1, borderColor: 'blue' }}
    >
      <VerticalBlock />
      <Spacer size="M" />
      <VerticalBlock />
    </Flex>
  ))
  .add('Spacer size L', () => (
    <Flex
      flexDirection="column"
      style={{ flex: 1, borderWidth: 1, borderColor: 'blue' }}
    >
      <VerticalBlock />
      <Spacer size="L" />
      <VerticalBlock />
    </Flex>
  ));
