## Star Wars

This project was created in React making call in API and saving the data in the Redux, and using other technologies web.

Este projeto foi criado em React realizando chamada em API e salvando os dados no Redux, e usando outras tecnologias web.

## Resumo

Este projeto foi desenvolvido em React com conceitos de PWA e SPA, realizando a persistência temporária das informações vindas da API do Star Wars SWAPI no Redux.
Então, se o site for atualizado todos os dados do Redux serão perdidos e o usuário terá que efetuar um novo registro no site.
O site está traduzido em dois idiomas Português e Inglês, sendo que ele verifica a região em que o usuário se encontra e o traduz automaticamente.
Obs: Se o usuário estiver numa localidade do idioma Português, é possível alterar as linhas de código no arquivo 'index.js' para testar o idioma Inglês, neste arquivo contém também a documentação para esta alteração.

## Instalação e execução

Depois de instalado o Node.js, abra o prompt de comando e dentro da pasta do projeto execute os comandos abaixo.

Para instalar as dependências do projeto:

```
npm install | yarn install
```

Executar o projeto localmente:

```
npm start | yarn start
```

Construir e executar o projeto:

```
npm run build | yarn run build
```

## Índice

- [Telas](#telas)

  - [Login](#login)
  - [Registro](#registro)
  - [Início](#inicio)
  - [Informação](#informacao)
  - [Sobre](#sobre)

- [Componentes](#componentes)

  - [Cabeçalho](#cabeçalho)
  - [Rodapé](#rodapé)
  - [Perfil](#perfil)
  - [Listagem](#listagem)

- [Tecnologias](#tecnologias)

  - [Visual Studio Code](#visual-studio-code)

    - [Fonte](#fonte)

      - [Fira Code](#fira-code)

    - [Extensões](#extensões)

      - [Color Highlight](#color-highlight)
      - [DotEnv](#dontenv)
      - [Dracula Official](#dracula-official)
      - [EditorConfig for VS Code](#editorconfig)
      - [ESLint](#eslint)
      - [Markdown All in One](#markdown-all-in-one)
      - [Material Icon Theme](#material-icon-theme)
      - [Prettier - Code formatter](#prettier)

    - [Configurações](#configurações)

  - [Node.js](#nodejs)
  - [Yarn](#yarn)

- [Bibliotecas](#bibliotecas)

  - [Create React App](#create-react-app)
  - [ESLint](#eslint)
  - [React Router](#react-router)
  - [Redux](#redux)
  - [Ducks](#ducks)
  - [Formik](#formik)
  - [Axios](#axios)
  - [React Intl](#react-intl)
  - [JW React Pagination Component](#jw-react-pagination-component)
  - [Particles.js](#particlesjs)
  - [Bootstrap 4](#bootstrap-4)

- [APIs](#apis)
  - [Star Wars API - SWAPI](#star-wars-api-swapi)

## Telas

### Login

![Screenshoot Login](https://github.com/osvaldokalvaitir/starwars/blob/master/screenshots/Login.png)
Esta é a primeira tela do site, para entrar o usuário terá que digitar seu usuário e senha registrados.
Se o usário não tem ainda um cadastro no site, precisa clicar em 'Criar uma.' que será redirecionado a página de registro.

### Registro

![Screenshoot SignUp](https://github.com/osvaldokalvaitir/starwars/blob/master/screenshots/SignUp.png)
Esta tela é responsável pelo registro do usuário onde serão obrigatórios os preenchimentos dos campos.
Os campos são: nome, nome de usuário, e-mail, cidade, estado, senha e precisa declarar também que é fã do Star Wars.

### Início

![Screenshoot Home](https://github.com/osvaldokalvaitir/starwars/blob/master/screenshots/Home.png)
Esta é a tela principal do site, onde você vai encontrar todas as informações sobre o Star Wars que são dividas em categorias.
Composto por: Cabeçalho, Perfil, Listagem e Rodapé

### Informação

![Screenshoot Info](https://github.com/osvaldokalvaitir/starwars/blob/master/screenshots/Info.png)
Nesta tela encontram-se os detalhes do item selecionado pelo usuário.
Composto por: Cabeçalho, Perfil e Rodapé

### Sobre

![Screenshoot About](https://github.com/osvaldokalvaitir/starwars/blob/master/screenshots/About.png)
Nesta tela se encontra a versão do site e as tecnologias que foram utilizadas para construí-lo.
Composto por: Cabeçalho e Rodapé

## Componentes

### Cabeçalho

É a barra superior que você encontra atalhos para a tela principal 'Início', a tela 'Sobre' e o 'Sair' que redireciona para a página de Login.

### Rodapé

É a barra inferior transparente onde são encontrados os links oficiais do Star Wars.
Os atalhos são: Site Oficial, Facebook, Tumblr, Twitter, Instagram, GooglePlus, YouTube e também a autoria do site.

### Perfil

É a barra esquerda onde são encontradas as informações do usuário logado e um avatar.
As informações são todos os dados cadastrados pelo usuário.

### Listagem

É a parte central do site, onde se encontram os botões para diversas categorias.
As categorias são: pessoas, planetas, espécies, naves estelares e veículos.
Selecionando uma categoria aparecerá uma listagem específica de acordo com a mesma.
Ao clicar em um item da categoria é possível visualizar seus detalhes.

## Tecnologias

### [Visual Studio Code](https://code.visualstudio.com)

Editor de código-fonte que inclui suporte para depuração, realce de sintaxe, complementação inteligente de código, snippets, entre outros.

#### Fonte

##### [Fira Code](https://github.com/tonsky/FiraCode)

Adicionar fonte no sistema operacional.

#### Extensões

##### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Exibe a cor exata de todos RGB’s ou HEX em seu código, muito útil para trabalhar com CSS ou SASS.

##### [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

Utilizado para ter suporte à sintaxe .env, muito útil para quem trabalha com NodeJS, ReactJS ou qualquer outro tipo de projeto web.

##### [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Tema para o VSCode.

##### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Utilizado para padronizar quebra de linha, indentação, espaços e tabs entre desenvolvedores de um mesmo projeto.

##### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Utilizado para padronizar código entre desenvolvedores como utilização de pontos e vírgulas, tamanho máximo de caracteres em linhas e todo outro tipo de padronização. Recomendado a utilização desse plugin junto aos guias de estilo do [AirBnB](https://www.npmjs.com/package/eslint-config-airbnb-base)

##### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Utilizado para escrever e ler Markdown dentro do VSCode, muito útil para documentações o README’s do Github.

##### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Utilizado para exibir os ícones de acordo com a linguagem utilizada na barra lateral.

##### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Utilizado para formatar JavaScript / TypeScript / CSS.

#### Configurações

Depois de adicionar a fonte e as extensões, setar as configurações (Settings > Open settings.json):

```
{
  // Define o tema do VSCode
  "workbench.colorTheme":"Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize":16,
  "editor.lineHeight":24,
  "editor.fontFamily":"Fira Code",
  "editor.fontLigatures":true,

  // Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
  "editor.rulers": [
    80,
    120
  ],

  // Aplica um sinal visual na esquerda da linha selecionada
  "editor.renderLineHighlight":"gutter",

  // Aumenta a fonte do terminal
  "terminal.integrated.fontSize":14,

  // Define o tema dos ícones na sidebar
  "workbench.iconTheme":"material-icon-theme",

  // Configura o Prettier e o ESLint
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```

### [Node.js](https://nodejs.org/)

Interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.

### [Yarn](https://yarnpkg.com)

Gerenciamento de dependências rápido, confiável e seguro.

## Bibliotecas

### [Create React App](https://github.com/facebook/create-react-app)

Cria aplicativos React sem configuração de compilação.

### [ESLint](https://github.com/eslint/eslint)

Ferramenta para identificar e relatar padrões em JavaScript.

### [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

Realiza o redirecionamento das rotas.

### [Redux](https://github.com/reduxjs/redux)

Contêiner de estado previsível para aplicativos JavaScript.

### [Ducks](https://github.com/erikras/ducks-modular-redux)

Conceito de agrupar peças do Redux em um módulo isolado que seja autônomo e possa ser facilmente empacotado em uma biblioteca.

### [Formik](https://github.com/jaredpalmer/formik)

Facilita a criação de formulários.

### [Axios](https://github.com/axios/axios)

Cliente HTTP baseado em promessas.

### [React Intl](https://github.com/yahoo/react-intl)

Fornece componentes e uma API para formatar datas, números e strings, incluindo pluralização e manipulação de traduções.

### [JW React Pagination Component](https://github.com/cornflourblue/jw-react-pagination)

Componente que realiza a paginação de dados.

### [Particles.js](https://github.com/VincentGarreau/particles.js/)

Biblioteca para criar partículas, utilizado no projeto para simular a animação do espaço.

### [Bootstrap 4](http://getbootstrap.com/docs/4.1/getting-started/introduction/)

Framework para criar sites responsivos e mobile.

## APIs

### [Star Wars API: SWAPI](https://swapi.co/documentation#start)

Contém informações do Star Wars.
