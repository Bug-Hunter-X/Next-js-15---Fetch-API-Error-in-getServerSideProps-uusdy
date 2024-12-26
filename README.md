# Next.js 15 - Fetch API Error in getServerSideProps

This repository demonstrates a common error encountered when using the `fetch` API within the `getServerSideProps` function in Next.js 15.  The issue arises when attempting to fetch data from an external API within the `getServerSideProps` function, causing an error because the context of the function is server-side. 

## Issue Description

The `fetch` request within `getServerSideProps` is failing.  This is occurring only within `/pages/about.js` while working perfectly in other components. This usually indicates a problem with how data is being fetched or handled within the specific component.