import Header from 'components/Header/Header';
import Head from 'next/head';

export default function MainContainer({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
