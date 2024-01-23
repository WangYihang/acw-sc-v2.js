FROM node:20
USER node
WORKDIR /app
RUN mkdir -p node_modules && chown -R node:node .
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn", "start" ]