# npm-run-all

A CLI tool to run multiple npm-scripts in parallel or sequential.

[![NPM](https://nodei.co/npm/npm-run-all.png?downloads=true&stars=true)](https://nodei.co/npm/npm-run-all/)

package.json

```js
{
  "name": "epirus-ui",
  "version": "1.0.0",
  "description": "Blockchain Explorer",
  "scripts": {
    "dev": "nodemon",
    "build": "npm-run-all --parallel build:client build:server",
    "build:server": "tsc -p ./tsconfig.server.json",
    "build:client": "next build",
    "lint": "eslint src --ext js,ts,tsx",
    "lint:fix": "npm run lint -- --fix",
    "start": "NODE_ENV=production node dist"
  },
```
