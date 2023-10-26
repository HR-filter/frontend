# ==== CONFIGURE =====
FROM node:18-alpine
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Set the env to "production"
ENV NODE_ENV production
# Build the app
RUN npm run build
# ==== RUN =======
# Start the app
CMD cp -r build result_build
