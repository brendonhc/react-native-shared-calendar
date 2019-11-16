# Agenda Compartilhada

<h4 align="center">
  ☕ Aplicativo mobile multiplataforma (Android e iOS) desenvolvido em React Native para gerenciamento e compartilhamento de agenda de eventos.
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brendonhc/react-native-shared-calendar.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brendonhc/react-native-shared-calendar.svg">
  
  <a href="https://github.com/brendonhc/react-native-shared-calendar/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brendonhc/react-native-shared-calendar.svg">
  </a>

  <a href="https://github.com/brendonhc/react-native-shared-calendar/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/brendonhc/react-native-shared-calendar.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#motivação">Motivação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#implementação">Implementação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodar-localmente">Rodar Localmente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Motivação

Demanda de aplicativos mobile para gestão de eventos em agenda compartilhada por muitas pessoas com alta disponibilidade e atualização em tempo real *desvinculada a agenda pessoal do usuário*. Hoje em dia a maior parte dos aplicativos de calendário/agenda são vinculados a agenda pessoal do usuário e os maiores problemas encontrados é a não intuitividade a criação de eventos em agendas compartilhadas não pessoais e também a falha de sincronismo muitas vezes nessas agendas.

## Como Usar

TODO: Disponibilizar .apk compilado
TODO: Disponibilizar na App Store

## Implementação

O aplicativo é implementado utilizando a biblioteca [*JavaScript*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [React Native](https://facebook.github.io/react-native/), e por trás, foi utilizado um BaaS, [Firebase](https://firebase.google.com/) para solução de base de dados e regras de negócio.

## Rodar Localmente

É possível rodar localmente fazendo o clone do repositório e executando o simples comando `yarn && yarn start`em um terminal para executar o servidor de desenvolvimento (certifique-se de ter o [node js](https://nodejs.org/) e o [yarn](https://yarnpkg.com/) instalado em sua máquina).
Depois, como qualquer aplicativo *React Native* escolha a plataforma que irá compilar o app e execute um dos comandos `yarn run android` ou `yarn run ios`.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
