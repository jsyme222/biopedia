FROM node:14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_MEDIA_URL http://localhost:8000/media/
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts@4.0.3
COPY . /app/