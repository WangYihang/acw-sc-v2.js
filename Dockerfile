FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install && \
    yarn cache clean --force && \
    rm -rf /usr/local/share/.cache/yarn
COPY . .
EXPOSE 3000
RUN yarn parcel build src/index.html
RUN npm i -g nodemon
ENTRYPOINT [ "yarn", "start" ]