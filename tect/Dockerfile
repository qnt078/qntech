FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "run", "preview"]