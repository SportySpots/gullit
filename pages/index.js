import React from 'react';

import Link from 'next/link';

function Home() {
  return (
    <div>
      <Link href="/games">
        <a>games page</a>
      </Link>
     Welcome to Next.js!
    </div>
  );
}

export default Home;
