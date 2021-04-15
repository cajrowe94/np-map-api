FROM node:12

# auto restart for server file changes
RUN npm install -g nodemon

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

ENV NODE_PATH /app/node_modules

RUN npm install

CMD ["npm", "start"]
