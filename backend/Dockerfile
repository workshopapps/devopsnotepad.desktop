FROM node:14


# set working directory
WORKDIR /usr/src/backend

# Copy the dependencies file
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# add app
COPY . .

# Build the application
RUN cd src


# wait for MySQL server
ENV DOCKERIZE_VERSION v0.6.0

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# start app
CMD dockerize -wait tcp://db-mysql:3306 -timeout 60m npm start
