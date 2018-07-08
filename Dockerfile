FROM node:8-alpine

# Change dir
WORKDIR /app

# Copy file
COPY . /app

# NPM set repo and install
RUN apk add --update alpine-sdk python

RUN yarn config set registry http://npm.somecompany.com && \
    yarn install && \
    yarn global add serve

RUN yarn run build && \
    yarn run build:server

# Expose the App's PORT
EXPOSE 3020

# Start the app
CMD ["yarn", "run", "serve"]