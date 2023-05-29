FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . ./app

RUN yarn set version berry