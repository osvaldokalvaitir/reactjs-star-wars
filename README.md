# starwars
Site criado em ReactJS realizando chamada em API e salvando no Redux, e usando outras tecnologias web.

Site created in ReactJS making call in API and saving in Redux, and using other technologies web.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)


Este site foi criado em ReactJS para que as informações vindas da API do Star Wars SWAPI sejam salvas no Redux.
Então, se o site for atualizado todos os dados do Redux serão perdidos e o usuário terá que efetuar um novo registro no site.
O site está traduzido em dois idiomas Português e Inglês, sendo que ele verifica a região em que o usuário se encontra e o traduz automaticamente.
Obs: Se o usuário estiver numa localidade do idioma Português, é possível alterar as linhas de código no arquivo 'index.js' para testar o idioma Inglês, neste arquivo contém também a documentação para esta alteração.

##Telas

#Login
Esta é a primeira tela do site, para entrar o usuário terá que digitar seu usuário e senha registrados.
Se o usário não tem ainda um cadastro no site, precisa clicar em 'Criar uma.' que será redirecionado a página de registro.
Composto por: Rodapé

#Registro
Esta tela é responsável pelo registro do usuário onde serão obrigatórios os preenchimentos dos campos.
Os campos são: nome, nome de usuário, e-mail, cidade, estado, senha e precisa declarar também que é fã do Star Wars.
Composto por: Rodapé

#Início
Esta é a tela principal do site, onde você vai encontrar todas as informações sobre o Star Wars que são dividas em categorias.
Composto por: Cabeçalho, Perfil, Listagem e Rodapé

#Sobre
Nesta tela se encontra a versão do site e as tecnologias que foram utilizadas para construí-lo.
Composto por: Cabeçalho e Rodapé


##Partes

#Cabeçalho
É a barra superior que você encontra atalhos para a tela principal 'Início', a tela 'Sobre' e o 'Sair' que redireciona para a página de Login.

#Rodapé
É a barra inferior transparente onde são encontrados os links oficiais do Star Wars.
Os atalhos são: Site Oficial, Facebook, Tumblr, Twitter, Instagram, GooglePlus, YouTube e também a autoria do site.

#Perfil
É a barra esquerda onde são encontradas as informações do usuário logado e um avatar.
As informações são todos os dados cadastrados pelo usuário.

#Listagem
É a parte central do site, onde se encontram os botões para diversas categorias.
As categorias são: pessoas, planetas, espécies, espaçonaves e veículos.
Selecionando uma categoria aparecerá uma listagem específica de acordo com a mesma.
Ao clicar em um item da categoria é possível visualizar seus detalhes.


##Tecnologias

#ReactJS
Este site foi desenvolvido em ReactJS com conceitos de PWA e SPA.

#Create React App
Para a criação da estrutura inicial do projeto foi utilizado o Create React App.

#React Router
Para o redirecionamento das rotas foi utilizado a biblioteca React Router.

#Redux e React Redux
Para a persistência dos dados da API foi utilizado a biblioteca Redux.

#Ducks
Para uma estrutura de arquivos escalável no Redux foi utilizado o conceito do Ducks.

#Formik
Para facilitar a criação de formulários foi utilizado a biblioteca Formik.

#Axios
Para realizar as chamadas HTTP na API foi utilizado a biblioteca Axios.

#React Intl
Para realizar a internacionalização da aplicação foi utilizado a biblioteca React Intl.

#JW React Pagination Component
Para facilitar a paginação do site foi utilizado a biblioteca JW React Pagination Component.

#Bootstrap 4
Para o site ter um design bonito e responsivo foi utilizado o Bootstrap 4.

#Star Wars API: SWAPI
Para a coleta das informações foram feitas chamadas na API do Star Wars: SWAPI.
