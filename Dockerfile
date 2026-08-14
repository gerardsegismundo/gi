FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000
# EXPOSE 80

CMD ["npm", "run", "dev"]
# CMD ["node", "server.js"]