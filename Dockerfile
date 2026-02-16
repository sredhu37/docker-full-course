FROM node:24.13.0@sha256:1de022d8459f896fff2e7b865823699dc7a8d5567507e8b87b14a7442e07f206 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

ENV NODE_ENV=production

RUN npm ci --production

COPY . .

RUN npm run build

FROM gcr.io/distroless/nodejs24-debian13:debug AS final

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["server.js"]
