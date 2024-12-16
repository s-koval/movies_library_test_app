FROM node:20-alpine3.17

WORKDIR /app
COPY  package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000

RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start"]