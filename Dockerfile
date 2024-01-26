FROM node:20
WORKDIR /app
RUN mkdir -p node_modules
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn parcel build src/index.html
RUN chown -R node:node .
USER node
ENTRYPOINT [ "yarn", "start" ]
