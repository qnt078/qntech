# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Ensure .env is included (Docker Compose will also pass env vars)
COPY .env .env

# Expose the port (make sure it's same as in .env, e.g., 3001)
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
