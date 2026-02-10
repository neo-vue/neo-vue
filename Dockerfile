FROM node:lts-alpine3.21 as build
WORKDIR /app

# copy the app, note .dockerignore
COPY . /app

# update and install dependency
#RUN apk update && apk upgrade

RUN npm install

# install test-server dependency
WORKDIR /app/test-server
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/test-server/dist /usr/share/nginx/html/
COPY --from=build /app/test-server/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
