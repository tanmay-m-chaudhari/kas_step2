FROM node:18-bullseye-slim AS builder

ENV NODE_ENV=production

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y --no-install-recommends dumb-init \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

COPY . .

FROM gcr.io/distroless/nodejs18-debian11

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=builder /usr/src/app /usr/src/app

USER nonroot

EXPOSE 8080

CMD ["/usr/bin/dumb-init", "node", "src/server.js"]
