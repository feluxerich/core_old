FROM node:14-alpine

WORKDIR /app

COPY . /app/

EXPOSE 3000

RUN npm install
RUN npm run build

CMD npm run start