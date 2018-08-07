FROM node:latest

RUN mkdir /app

COPY ["package.json", "package-lock.json", "/app/"]
COPY ./src /app/src

WORKDIR /app

RUN npm install --silient --production

EXPOSE 3000
CMD npm start
