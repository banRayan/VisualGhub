<h2 align="center">Visual Ghub</h2>

## Demo

<p>Você pode acessar o site por meio desse link: </p>
<div align="center">
 <a href="https://banrayan.github.io/VisualGhub/"  target="_blank"> 👉 Visual Ghub 👈</a>
</div>

## Sobre 

<p>O projeto consiste em modelo alternativo de exibição dos dados de usuários do GitHub. </br></br>Para acessá-lo basta ter uma conta no <a href="https://github.com" target="_blank" rel="external">github.com</a> e inserir seu nome de usuário no campo de entrada, assim o site poderá localizar seus dados públicos e consumí-los.</p>

<p>Dentre as informações consumidas estão: lista de repositórios, títulos, descrições e links dos projetos etc.</p>

<p>Se você quiser tentar fazer seu própio site consumindo as informações do seu Github, basta acessar a API com seus dados dessa maneira: https://api.github.com/users/seu_username.</p>

<img src="https://user-images.githubusercontent.com/84761488/183534498-54926aeb-7baa-4edc-a659-c55aedd785fe.png" />
<img src="https://user-images.githubusercontent.com/84761488/183537932-0fa2ecfd-ac77-45dd-8377-fcbdf1fda566.png" />
<img src="https://user-images.githubusercontent.com/84761488/183534762-15f344ea-bc71-48f1-b36b-bffd6f333d9a.png" />

<a href="https://dribbble.com/shots/16271760-Sidebar-navigation-for-Dashboard">Layout inspirado no design</a> de <a href="https://dribbble.com/tranmautritam">tran mau tritam</a>

## Funcionalidades 

* Obtém informações do usuário através de qualquer username registrado no <a href="https://github.com">GitHub</a>.
* Exibe lista de repositórios do usuário, títulos e descrições de projetos públicos.
* Exibe informações do perfil do usuário: avatar, bio, blog, twitter e localização.
* Fornece links de direcionamento para projetos e redes sociais.
* Adaptativo / responsivo ( tablet e alguns modelos mobile).

## Tecnologias

<p>O projeto conta com recursos fornecidos pelo react e libs externas, sendo esses:</p>

* <a href="https://reactrouter.com" target="_blank" rel="external" >React Router</a> - Roteamento client-side
* <a href="https://styled-components.com" target="_blank" rel="external">Styled Components</a> - CSS in JS
* Context - Descentralização de dados
* <a href="https://axios-http.com/ptbr/" target="_blank" rel="external">Axios</a> - HTTP Client
* <a href="https://react-icons.github.io/react-icons/icons?name=fi" target="_blank" rel="external">React Icons</a> - ícones

## Requisitos

Antes de executar o projeto é necessário ter o <a href="https://nodejs.org/en/" target="_blank" rel="external">Node</a> e o <a href="https://yarnpkg.com">Yarn</a> instalados

## Como executar?

```bash
# clone o repositório
$ git clone https://github.com/banRayan/VisualGhub.git
# acesse 
$ cd marmiTech-challenge
# Instale as dependências 
$ yarn
# Inicie o projeto
$ yarn run dev
# O server será inicializado em http://localhost:3000
```

## Licença

Este projeto está sob licença do MIT. Para obter mais detalhes, consulte o arquivo <a href="./LICENSE.md">Licença</a>.



