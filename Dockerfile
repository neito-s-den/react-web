# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (npm or yarn can be used)
RUN npm install

# Copy the rest of the project files into the working directory
COPY . .

# Expose the port Vite uses (usually 5173)
EXPOSE 5173

# Command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
