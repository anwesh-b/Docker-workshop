FROM node:alpine

RUN mkdir /nodeapp
WORKDIR /nodeapp
COPY ./* /nodeapp/

RUN npm install
EXPOSE 3000

CMD ["node","index.js"]
