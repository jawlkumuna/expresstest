FROM node:18.13.0-alpine as production

WORKDIR /usr/src/app

EXPOSE 8000 

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start