FROM node:12-alpine

WORKDIR /usr/src/strapiwebhook

COPY . .

RUN npm install

ENV NODE_ENV=production

RUN npm run build

RUN npm prune --production

CMD [ "npm", "start" ]