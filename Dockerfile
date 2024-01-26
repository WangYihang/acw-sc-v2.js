FROM node:20 AS builder
WORKDIR /app
RUN mkdir -p node_modules dist
COPY . .
RUN yarn install
RUN yarn parcel build src/index.html
ENTRYPOINT [ "yarn", "start" ]

FROM nginx:1.21.1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]