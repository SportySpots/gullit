import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '.';

storiesOf('common.Text', module)
  .add('Text fontSize={1}', () => (
    <Text fontSize={1}>
      By signing up you agree to our Terms & Privacy Policy
    </Text>
  ));
// .add('Text default SM size', () => (
//   <Text>
//     Have an account? Sign in
//   </Text>
// ))
// .add('Text M size', () => (
//   <Text size="M">
//     I&apos;m the Text
//   </Text>
// ))
// .add('Text ML size', () => (
//   <Text size="ML">
//     Pet-Powered Travel
//   </Text>
// ))
// .add('Text L size', () => (
//   <Text size="L">
//     I&apos;m the Text
//   </Text>
// ))
// .add('Text XL size', () => (
//   <Text size="XL">
//     Sign up
//   </Text>
// ))
// .add('Text XL size color secondary', () => (
//   <Text size="XL" secondary>
//     Sign up
//   </Text>
// ))
// .add('Text ellipsis', () => (
//   <Text ellipsis>
//     Some long long really long text Some long
//     long really long text Some long long really long text
//   </Text>
// ));
