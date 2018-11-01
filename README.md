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
npm install
```

Executar o projeto localmente:
```
npm start
```

Construir e executar o projeto:
```
npm run build
```


## Índice

- [Telas](#telas)
  - [Login](#login)
  - [Registro](#registro)
  - [Início](#inicio)
  - [Sobre](#sobre)

- [Componentes](#componentes)
  - [Cabeçalho](#cabeçalho)
  - [Rodapé](#rodapé)
  - [Perfil](#perfil)
  - [Listagem](#listagem)

- [Tecnologias](#tecnologias)
  - [Visual Studio Code](#visual-studio-code)
  - [Node.js](#nodejs)

- [Bibliotecas](#bibliotecas)
  - [Create React App](#create-react-app)
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
Esta é a primeira tela do site, para entrar o usuário terá que digitar seu usuário e senha registrados.
Se o usário não tem ainda um cadastro no site, precisa clicar em 'Criar uma.' que será redirecionado a página de registro.
Composto por: Rodapé

### Registro
Esta tela é responsável pelo registro do usuário onde serão obrigatórios os preenchimentos dos campos.
Os campos são: nome, nome de usuário, e-mail, cidade, estado, senha e precisa declarar também que é fã do Star Wars.
Composto por: Rodapé

### Início
Esta é a tela principal do site, onde você vai encontrar todas as informações sobre o Star Wars que são dividas em categorias.
Composto por: Cabeçalho, Perfil, Listagem e Rodapé

### Sobre
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

### [Node.js](https://nodejs.org/)
Interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.


## Bibliotecas

### [Create React App](https://github.com/facebook/create-react-app)
Cria aplicativos React sem configuração de compilação.

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
API que contém informações do Star Wars.
