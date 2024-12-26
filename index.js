```javascript
// pages/about.js

export default function About({ data }) {
  return (
    <div>
      <h1>About Us</h1>
      {data && <p>Some data: {data.someData}</p>}
      {!data && <p>Failed to load data</p>}
    </div>
  );
}
export async function getServerSideProps(context) {
    try {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()

        return {
          props: {
            data,
          },
        }
    } catch (error) {
        console.error("Error fetching data:", error)
        return {
          props: {
            data: null,
          },
        }
    }
  }
```