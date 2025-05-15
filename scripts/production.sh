#!/usr/bin/env bash

set -exo pipefail

# Build and run the latest version of the app
docker compose --file docker-compose.yml up --build --detach

# Remove the unused containerskkk
# docker system prune --force llllhh
