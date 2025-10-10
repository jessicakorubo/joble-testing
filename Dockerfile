FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the built app
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 8080
CMD ["node", "server.js"]