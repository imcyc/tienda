import Head from 'next/head';
import Header from './Header/Header';
import Footer from '../components/Footer/Footer';

export default function Layout({children}) {
  return(
    <div>
      <Head>
        <title>Tienda del Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}