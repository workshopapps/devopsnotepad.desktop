FROM node:18-alpine

# install latest upgrades
RUN apk -U upgrade

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the dependencies file
COPY package*.json ./

# Install dependencies
RUN npm install

# add app
COPY . .

# wait for MySQL server
ENV DOCKERIZE_VERSION v0.6.0

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# start app
CMD dockerize -wait tcp://db-mysql:3306 -timeout 60m npm start
