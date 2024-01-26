FROM node:20
WORKDIR /app
RUN mkdir -p node_modules dist
COPY . .
RUN yarn install
RUN yarn parcel build src/index.html
ENTRYPOINT [ "yarn", "start" ]