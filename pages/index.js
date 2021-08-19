
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getWhyNextReasons } from "../lib/api";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home({ reasons }) {
  return (
    <Layout>
    <div className={styles.container}>
      <Container>
        <h1 className={styles.title}>
          PRODUCTOS
        </h1>
        <hr/>
        <Row>
        {reasons
          .slice(0, reasons.length - 1)
          .map(({ title, description, href, image }) => (
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
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
                  </Card.Text>
                  <Button variant="primary">VER DETALLES</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
      </Container>
    </div>
    </Layout>
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