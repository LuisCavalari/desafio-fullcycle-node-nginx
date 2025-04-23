FROM node:21-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache curl

RUN npm install

EXPOSE 7000

ENTRYPOINT [ "node", "index.js"]