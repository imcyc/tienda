import styles from '../../../styles/Home.module.css';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <a
        href="http://www.imcyc.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ® 2021 Instituto Mexicano del Cemento y del Concreto, A.C.
      </a>
    </footer>
  )
}
