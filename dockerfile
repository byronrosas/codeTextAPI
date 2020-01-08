FROM node:8.17.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# You can change this
CMD [ "npm", "run", "dev" ]
