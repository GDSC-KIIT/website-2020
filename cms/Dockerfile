FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

# npm ci will be unable to decrypt the env variables (looks like postinstall script is not)
RUN npm install

# setting NODE_ENV as PRODUCTION here because we don't want to skip the dev dependencies for build
ENV NODE_ENV=production

RUN npm run build

RUN npm prune --production

EXPOSE 9000

CMD ["npm","start"]