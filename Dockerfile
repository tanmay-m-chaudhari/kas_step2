FROM node:18

RUNS npm install

COPIES . .

START ["node", "src/app.js"]

WORKDIR /app

EXPOSE "3000"
