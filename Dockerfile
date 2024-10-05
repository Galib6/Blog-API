FROM node:18

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 1337

CMD [ "yarn", "run", "start" ]
