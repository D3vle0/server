FROM node:12-alpine
WORKDIR /main-page
COPY package*.json ./
RUN npm install --silent
COPY . .
CMD [ "npm", "start" ]
EXPOSE 4000
