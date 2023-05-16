# Create Next-App Layout

## About

This program is a template for working with Next.js applications based on React. This template makes it easy to 
get started with Next.a js application, and the main advantage of this application is that it works on Docker, 
in particular on docker-compose-up, which will help to easily embed it in your project.

## Start

## New, up-to-date launch instructions (Actual start):

- ### First, copy the repository:

```
git clone https://github.com/https://github.com/evgenytryzo/Create-App-Layout.git
```

- ### Then run the command on the command line:

```
docker compose up
```

With this command, you will launch the container with the application.

- ### Open a browser window and navigate to a local host with port 4000:

```
http://localhost:4000/
```

## Early, outdated instructions for launching (Does not work):

- ### First, copy the repository:

```
git clone https://github.com/https://github.com/evgenytryzo/Create-App-Layout.git
```

- ### After cloning, you should install dependencies. To do this, go to the command line and write the following commands:

```
yarn install
npm install
```

For installing all dependencies type `yarn`
> If you get some error delete `.node_modules` and try again **or** create an issue about that

- ### Next, you need to build a docker image to run docker-compose(The name can be changed, but it should also be changed in docker-compose.yml):

```
docker build -t next-app .
```

- ### Then run the command on the command line:

```
docker compose up
```

With this command, you will launch the container with the application.

- ### Open a browser window and navigate to a local host with port 4000:

```
http://localhost:4000/
```

## Documentation:

#### To change the port, you should change the port in the 'package.json' file:

```
"scripts": {
    "dev": "next dev -p YOUR PORT",
    "build": "next build",
    "start": "next start -p YOUR PORT",
    "lint": "next lint"
  }
```

#### And you should also change the port in the 'docker-compose.yml' file:

```
    ports:
      - "YOUR PORT:PORT"
```

## Tools:

- Next.js
- React
- Docker
- Yarn
- CSS

## Tasks for this project:

- Create a 'sh' file to automatically configure dependencies in the project.
- Change the 'export' and 'import' in the components for convenient work with them.
- Install 'Babel'.

#### Interesting ideas and comments on the project are accepted for the kidney: "g0022@inbox.ru"