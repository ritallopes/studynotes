---
title: "GraphQL em Next"
tag: "React-to-Next"
excerpt: "Anotações do processo de adaptação do GraphQl já usado no React para o Next"
coverImage: "/assets/blog/dynamic-routing/graphqlnext.jpeg"
date: "2021-04-06T18:04:00.000Z"
author:
  name: Rita L Lopes
  picture: "/assets/blog/authors/ritallopes.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/graphqlnext.jpeg"
---

# GraphQL em Next

## Configuração Básica

Instalando apollo/client e graphql:  
`npm install @apollo/client graphql`

```

Criando um arquivo com configurações do apollo/client (coloquei em pasta ./utils):
// ./apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: "URI_API",
    cache: new InMemoryCache(),
});
export default client;
```

## getStaticProps

Usando o método _getStaticProps_ teremos dados buscados em API para páginas geradas estaticamente. Pois, é usado durante o _build_ do projeto

##

OBS: Não garanto que é a melhor forma de fazer isso
