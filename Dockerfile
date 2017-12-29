FROM node:8

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
EXPOSE 8080
