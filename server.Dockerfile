FROM node:alpine
WORKDIR /app
ADD . .
RUN yarn
RUN yarn server:build
CMD ["yarn", "server:start"]
