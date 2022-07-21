import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

export default function CreatePost() {
  return (
    <Layout>
      <Head>
        <title>WEB I - Notas de Estudo</title>
      </Head>
      <Container>
        <CreatePost />
      </Container>
    </Layout>
  );
}
