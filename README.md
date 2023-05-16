# Layout App

## About

This program is a template for working with Next.js applications based on React. This template makes it easy to
get started with Next.a js application, and the main advantage of this application is that it works on Docker,
in particular on docker-compose-up, which will help to easily embed it in your project.

This is the second version of the app.
The first one is here - https://github.com/evgenytryzo/Create-App-Layout-trial 

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

For installing all dependencies type `yarn`
> If you get some error delete `.node_modules` and try again **or** create an issue about that

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

#### Interesting ideas and comments on the project are accepted for the kidney: g0022@inbox.ru