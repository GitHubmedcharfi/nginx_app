FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js .
COPY tunisian-food.html .
COPY images ./images

EXPOSE 3000

CMD ["node", "server.js"]
