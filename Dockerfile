FROM node:10-alpine
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json tsconfig.json
COPY Makefile Makefile
RUN npm ci
COPY public public
COPY src src
RUN apk update && apk upgrade && \
    apk add --no-cache make
RUN make build

RUN npm install --global serve
CMD serve -s build
