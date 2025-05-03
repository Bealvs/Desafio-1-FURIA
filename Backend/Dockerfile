
FROM node:22.15-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apk add --no-cache openssl postgresql-client
COPY . .
EXPOSE 5000
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
CMD ["./entrypoint.sh"]
