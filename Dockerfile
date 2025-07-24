# Multi-stage build for Next.js production
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Install pnpm globally in builder stage
RUN npm install -g pnpm@latest

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build arguments for Next.js public environment variables
ARG NEXT_PUBLIC_BACKEND_API_KEY
ARG NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY

# Debug: Check if build args are received
# RUN echo "🔍 Build args received:" && \
#     echo "BACKEND_API_KEY: ${NEXT_PUBLIC_BACKEND_API_KEY:+PRESENT}" && \
#     echo "EVOLUTION_API_KEY: ${NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY:+PRESENT}" && \
#     if [ -z "$NEXT_PUBLIC_BACKEND_API_KEY" ]; then echo "❌ BACKEND_API_KEY is empty"; fi && \
#     if [ -z "$NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY" ]; then echo "❌ EVOLUTION_API_KEY is empty"; fi

# CRITICAL: Set environment variables BEFORE running build
ENV NEXT_PUBLIC_BACKEND_API_KEY=$NEXT_PUBLIC_BACKEND_API_KEY
ENV NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY=$NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY

# Create .env.local as backup (Next.js reads this during build)
RUN echo "NEXT_PUBLIC_BACKEND_API_KEY=$NEXT_PUBLIC_BACKEND_API_KEY" > .env.local && \
    echo "NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY=$NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY" >> .env.local

# Debug: Show environment before build
RUN echo "🌍 Environment before build:" && \
    env | grep NEXT_PUBLIC && \
    echo "📝 .env.local content:" && \
    cat .env.local

# Next.js collects completely anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the public folder
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]