import React from 'react';
import Link from 'next/link';
import { Heading } from 'rebass';

const HomePage = () => (
  <div>
    <Link href="/games">
      <a>games page</a>
    </Link>
    <Heading
      color="error"
      fontFamily="raj"
      as="h3"
    >
      Welcome to Next.js!
    </Heading>
  </div>
);

export default HomePage;
