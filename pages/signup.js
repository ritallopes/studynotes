import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import FormAuthor from "../components/FormAuthor";

export default function Signup() {
  return (
    <>
      <Layout>
        <Head>
          <title>WEB I - Notas de Estudo</title>
        </Head>
        <Container>
          <FormAuthor />
        </Container>
      </Layout>
    </>
  );
}
