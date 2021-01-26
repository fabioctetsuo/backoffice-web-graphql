# RD Next.JS Template

Esse template tem como objetivo padronizar os projetos desenvolvidos em Next.JS na plataforma da RD Saúde, aplicando as mesmas regras de testes estáticos e de tecnologias core.

## Requisitos do projeto

Esse projeto faz o uso do node e yarn.

```sh
node v12.18.4
yarn v1.22.5
```

## Primeiros passos

#### Clonando o projeto e instalando dependências

```sh
git clone git@github.com:RAIADROGASIL/health-hub-web.git
cd health-hub-web
yarn install
```

#### Acessando o projeto

Para rodar o projeto junto com o mock api em ambiente local

```sh
yarn dev:all
```

Para rodar somente o projeto

```sh
yarn dev
```

[Clique aqui para acessar a página inicial do projeto.](http://localhost:3000/)

## Filosofia

- Seguimos a premissa do [Component Driven Design](https://www.componentdriven.org/), onde trabalhamos primeiro com componentes pequenos (atômicos) no storybook, depois contruindo componentes mais complexos até construir a página.
- Não vamos ficar batendo cabeça com DRY, vamos utilizar o [Aha Programming](https://kentcdodds.com/blog/aha-programming) (Avoid Hasty Abstractions)
- Usamos o conceito de [colocation](https://kentcdodds.com/blog/colocation), tanto logicamente e fisicamente.
  - Com isso colocamos tanto arquivos de story e testes no mesmo lugar que o componente
  - Também colocamos estados/dados os mais próximo possível de onde o estado/dado será utilizado
- Fazemos todos os testes possíveis com os componentes isolados e também integrado com a página. Sempre visando a visão do usuário nos nossos cenários de teste
- Não utilizamos um gerenciador de estado global. Vamos usar custom hooks para lógica nas páginas com possíveis contexts caso necessário.

## Commits

Seguimos as convenções do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), sendo assim utilizamos o `commitizen` para controlar essa padrão.

Exemplo de commit:
`<type>[optional scope]: <description>`
`feat(login): New login button`

## Estrutura do projeto / Tecnologias

### View

- Nosso projeto trabalha com React como a lib de visualização.
- Para estilização dos components trabalhamos com o [styled-components](https://styled-components.com/) que já entrega um componente react com o nosso estilo customizado.
- Usamos o [Material-ui](https://material-ui.com/) como nosso "design-system".
  - O tema do material pode ser modificado no arquivo `src/theme.ts`

### Teste

#### Análise estática

- Usamos o TypeScript para validar a tipagem dos nossos componentes e funções.
- O projeto utiliza ESLint e Prettier para validar regras de estilos e manter um padrão de desenvolvimento.

#### Integrados e Unitários

- O principal framework de testes que usamos é o [Jest](https://jestjs.io/)
- Nossos testes ficam ao lado do arquivo que está testando e utiliza o pattern `arquivo.test.(ts | tsx)`
- Para testar os componentes a nível de server side, basta criar uma pasta chamada `__server_tests__` e dentro os arquivos com o pattern `arquivo.test.(ts | tsx)`
- Para testar os arquivos em react temos o [Testing-library](https://testing-library.com/docs/react-testing-library/cheatsheet) que vai servir tanto como testes unitários de componente e testes integrados de página.
- Utilizamos um utils que já embeda o nosso componente/página com o Material e Graphql e pode ser encontrado em `src/utils/testing.tsx`
- Os componentes/páginas que necessítam do graphql podem mockar utilizando a seguinte anotação encontrada na página https://www.apollographql.com/docs/react/development-testing/testing/
- Para rodar os testes utilizamos o comando `yarn test`
- Para executar o coverage temos o comando `yarn test:coverage`

### BFF

<p align="center">
  <img src="https://i.ibb.co/RvD9V7q/download.png" height="350" />
</p>

Um BFF é uma camada onde centraliza todas as requisições de um front para outros serviços e faz todo o processamento e tratamento de dados que ajude o front nas suas requisições.
https://samnewman.io/patterns/architectural/bff/

- O nossos clients fronts não terão chamadas diretas para os nossos microserviços.
- Vamos ter uma camada BFF que no momento vai subir junto com o front pelo Next. O Graphql é a base do nosso BFF.
- As chamadas do front para os microserviços devem ser feitas na rota `api/graphql` onde é o endpoint do Graphql (lembrando que o Graphql tem apenas um endpoint e recebe apenas chamadas POST)
- O Graphql vai ser responsável por fazer todas as chamadas aos microserviços. Usando Query para GET e Mutations para POST/PUT/DELETE
- Após a chamada ser concluída, o Graphql vai retornar o response que seja o mais favorável possível ao front, entregando exatamente o que o client front pediu e com a melhor estrutura possível.
- As configurações das nossas API dos microserviços vão ser controladas no `graphql/datasources`
- Utilizamos o `graphql-codegen` para gerar os _types_ para o typescript baseados nos schemas do graphql
- O `graphql-codegen` também gera um hook para cada query/mutation que criamos no graphql

### Mock

- Utilizamos o [json-server](https://github.com/typicode/json-server) para mockar os nosso microserviços durante o desenvolvimento local
- Para mockar uma api é somente criar um novo arquivo na pasta `mock/initialData` e devolver um objeto ou array. O nome do arquivo é a rota a ser mockada e o valor é a resposta mockada dessa rota em si.
- Caso queira criar uma rota customizada, pois precisa de uma implementação diferente do `json-server`, pode criar um novo arquivo no `mock/customRoutes`
- O graphql já está configurado a pegar o mock do json-server caso não tenha um `env` com aquele endpoint
- Para subir o mock usamos o comando `yarn mock-server`

### Docs

- Para documentar um componente vamos usar o storybook
- Nossas stories ficam ao lado do arquivo fonte e utiliza o pattern `arquivo.stories.jsx`
- Todas as props devem estar contempladas na storie
- Para subir o storybook rodamos o comando `yarn storybook`
