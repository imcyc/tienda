import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getWhyNextReasons } from "../lib/api";

export default function Home({ reasons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda del Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al imcyc
        </h1>
        {reasons
          .slice(0, reasons.length - 1)
          .map(({ title, description, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
            >
              <h3 className="font-bold mb-2">{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <span className="text-blue-600 hover:text-blue-400 hover:underline mt-4 block">
                Documentation →
              </span>
            </a>
          ))}
      </main>
      <footer className={styles.footer}>
        <a
          href="http://www.imcyc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ® 2021 Instituto Mexicano del Cemento y del Concreto A.C.
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const reasons = await getWhyNextReasons();
  
  return {
    props: {
      reasons,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}