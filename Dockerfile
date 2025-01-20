FROM node:18-alpine3.21

RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
