FROM node:11

WORKDIR /src/app

COPY package-lock.json package.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
