import 'dotenv/config'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const font = Inter({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] });

const RootLayout = ({ Component, pageProps }) => {

  return (
    <>
      <NextNProgress color='#f9fafb'/>
      <Head>
        <link rel='icon' href='https://baodaigov.github.io/assets/image/favicon.ico'/>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}/>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GTM_ID}');`}}/>
      </Head>
      <div className={font.className}>
        <Header/>
        <Component {...pageProps}/>
        <Footer/>
      </div>
    </>
  )
}

RootLayout.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default RootLayout;