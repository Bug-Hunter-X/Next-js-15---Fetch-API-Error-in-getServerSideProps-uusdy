```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because `fetch` is not available in the server-side context of getServerSideProps.
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return (
    <div>
      <h1>About Us</h1>
      <p>Some data: {data.someData}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
    const res = await fetch('https://api.example.com/data')
    const data = await res.json()

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        data,
      },
    }
  }
```