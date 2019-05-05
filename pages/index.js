import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  color: red;
  font-family: 'Rajdhani', sans-serif;
`;

const Home = () => (
  <div>
    <Link href="/games">
      <a>games page</a>
    </Link>
    <Title>Welcome to Next.js!</Title>
  </div>
);

export default Home;
