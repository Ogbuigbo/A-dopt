# The base image
FROM node:20.17.0-bookworm-slim AS base

# The "dependencies" stage
# It's good to install dependencies in a separate stage to be explicit about
# the files that make it into production stage to avoid image bloat
FROM base AS deps

# Enable Corepack so that Yarn can be installed
RUN corepack enable

# The application directory
WORKDIR /app


# Copy files for package management
COPY package.json yarn.lock .yarnrc.yml ./

# Install packages
RUN yarn install --immutable --inline-builds



# The final image
FROM base AS production

# Enable Corepack so that Yarn can be installed
RUN corepack enable

# Create a group and a non-root user to run the app
RUN groupadd --gid 1001 "nodejs"
RUN useradd --uid 1001 --create-home --shell /bin/bash --groups "nodejs" "nextjs"

# The application directory
WORKDIR /app

# Make sure that the .next directory exists
RUN mkdir -p /app/.next && chown -R nextjs:nodejs /app

# Copy packages from the dependencies stage
COPY --from=deps --chown=nextjs:nodejs /app/yarn.lock /app/yarn.lock

# Copy the rest of the application files
COPY --chown=nextjs:nodejs . /app/


# Enable production mode
ENV NODE_ENV=production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Configure application port
ENV PORT=3000

# ENV NEXT_PRIVATE_STANDALONE=true


# Let image users know what port the app is going to listen on
EXPOSE 3000

# Change the user
USER nextjs:nodejs

# Make sure dependencies are picked up correctly
RUN yarn add tailwindcss-animate
RUN yarn install --immutable --inline-builds