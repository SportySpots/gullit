import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flex, Text } from 'rebass';
import DotSpacer from '.';

storiesOf('Common.DotSpacer', module)
  .add('DotSpacer size S', () => (
    <Flex>
      <Text>Left size</Text>
      <DotSpacer size="S" />
      <Text>Right size</Text>
    </Flex>
  ))
  .add('DotSpacer default size M', () => (
    <Flex>
      <Text>Left size</Text>
      <DotSpacer />
      <Text>Right size</Text>
    </Flex>
  ))
  .add('DotSpacer size L', () => (
    <Flex>
      <Text>Left size</Text>
      <DotSpacer size="L" />
      <Text>Right size</Text>
    </Flex>
  ));
