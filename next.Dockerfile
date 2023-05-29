FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . ./app

CMD ["yarn", "dev"]