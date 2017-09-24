FROM node:boron

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3075

CMD [ "node", "./build/server/server.js" ]
