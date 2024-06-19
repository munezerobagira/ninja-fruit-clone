FROM node:lts-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
FROM build as production
ENV NODE_ENV=production
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
FROM build as development
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]
