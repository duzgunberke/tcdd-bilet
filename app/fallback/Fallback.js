import Head from 'next/head'

const Fallback = () => (
  <>
    <Head>
      <title>Offline</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any route will fallback to this page</h2>
  </>
)

export default Fallback