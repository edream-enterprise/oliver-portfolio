# Stage 1: Build the SvelteKit application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install system dependencies required for native packages like canvas
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    giflib-dev \
    pixman-dev \
    pangomm-dev \
    libjpeg-turbo-dev \
    freetype-dev

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Prune devDependencies to keep the production image small
RUN npm prune --omit=dev

# Stage 2: Create the distroless production image
FROM gcr.io/distroless/nodejs22-debian12

WORKDIR /app

# Copy production dependencies and built application
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

# Configure environment variables for adapter-node
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["build/index.js"]
