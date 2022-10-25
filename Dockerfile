FROM node:alpine

RUN mkdir -p /usr/src/todo-api && chown -R node:node /usr/src/todo-api

WORKDIR /usr/src/todo-api

COPY package.json ./

USER node

RUN npm install --no-package-lock

COPY --chown=node:node . .

EXPOSE 3000
