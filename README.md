# Stacc code competition 2022

Project for Stacc's Future of Fintech 2022 code competition.

Topic: NFT  
API: [docs.opensea.io](https://docs.opensea.io/reference/getting-assets)

Target: Full-stack website

With the aims of learning new technologies and enhancing knowledge in others, and covering as much ground as possible within the topic.

## Preview product

Repository: [github/norbye/stacc-competition-22](https://github.com/norbye/stacc-competition-22)  
Production environment: [stacc-22.norbye.com](https://stacc-22.norbye.com)

## Technologies

React w/ TypeScript & Redux-Toolkit frontend
NestJS w/ GraphQL & MongoDB backend

## Setup

To run the backend, execute these commands from the `/api` directory:

```sh
docker-compose up # To start the database
yarn start:dev # To start the node backend
```

To run the frontend, execute `yarn start` from the root directory of this repository.

This starts the project in development mode, if you desire to run it in production mode, the commands are available in the package.json files.
