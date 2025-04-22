FROM node:21-alpine

WORKDIR /app

COPY . .

RUN apk add --no-cache curl

EXPOSE 7000

ENTRYPOINT [ "node", "index.js"]