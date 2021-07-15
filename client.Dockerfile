FROM node:alpine
WORKDIR /app
ADD . .
RUN yarn
RUN yarn client:build
CMD ["yarn", "client:start"]
