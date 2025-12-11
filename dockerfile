FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:18-alpine AS production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist

USER nestjs
EXPOSE 3000

CMD ["node", "dist/main"]
