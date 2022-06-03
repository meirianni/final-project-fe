FROM node:14-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
RUN npm install -g serve
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "serve", "-s","build" ]