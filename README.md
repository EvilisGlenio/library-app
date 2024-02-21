# Documentação da Mini Biblioteca com GraphQL

## Visão Geral

Este é um pequeno projeto de GraphQL e Apollo Server, desenvolvido com o objetivo de aprender GraphQL e sua integração com o Apollo Server. O projeto inclui operações básicas de CRUD (Create, Read, Update, Delete) em uma lista de livros simulada.

## Funcionalidades

O projeto inclui as seguintes funcionalidades:

- **Consulta de Livros**
  - Consulta de todos os livros disponíveis.
  - Consulta de um livro específico pelo seu ID.
- **Criação de Livros**
  - Adição de novos livros à lista.
- **Atualização de Livros**
  - Atualização das informações de um livro existente.
- **Remoção de Livros**
  - Remoção de um livro da lista.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- **Banco de Dados Fake**: Utiliza uma array chamada books para simular um banco de dados simples.
- **Definição de Tipos (Type Definitions)**: Define os tipos de dados GraphQL, incluindo os tipos Book, Query e Mutation.
- **Resolvers**: Implementa a lógica para resolver as consultas e mutações definidas nos tipos.
- **Servidor Apollo**: Cria uma instância do servidor Apollo utilizando os tipos definidos e os resolvers.

## Tipos GraphQL

### Book

- **id**: Identificador único do livro (ID).
- **title**: Título do livro (String).
- **author**: Autor do livro (String).
- **publishedAt**: Ano de publicação do livro (Int).

### Query

- **books**: Retorna uma lista de todos os livros disponíveis.
- **book(id: ID!)**: Retorna um livro específico com base no ID fornecido.

### Mutation

- **create(id: ID!, title: String!, author: String!, publishedAt: Int!)**: Cria um novo livro com as informações fornecidas.
- **delete(id: ID!)**: Remove um livro com base no ID fornecido.
- **update(id: ID!, title: String, author: String, publishedAt: Int)**: Atualiza as informações de um livro existente com base no ID fornecido. As informações a serem atualizadas são opcionais.

## Executando o Servidor

Para executar o servidor Apollo, utilize o método `listen()` e especifique a porta desejada. Após a inicialização bem-sucedida, o servidor estará disponível no URL fornecido.

```javascript
const app = new ApolloServer({ typeDefs, resolvers });
app.listen().then(({ url }) => console.log(`Servidor rodando em ${url}`));
```

## Próximos Passos

- _Integração com React_: Implementar a integração do servidor GraphQL com um frontend React para permitir interações com o usuário.
- _Testes Unitários_: Desenvolver testes unitários para garantir o funcionamento correto das operações CRUD e da lógica de resolvers.

## Conclusão

Este projeto serve como uma introdução prática ao GraphQL e ao Apollo Server, proporcionando uma compreensão básica das operações fundamentais, da estrutura de tipos e resolvers, bem como da criação de um servidor GraphQL funcional.
