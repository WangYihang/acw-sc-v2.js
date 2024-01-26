FROM node:20
USER node
WORKDIR /app
RUN mkdir -p node_modules dist && chown -R node:node .
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn parcel build src/index.html
ENTRYPOINT [ "yarn", "start" ]
