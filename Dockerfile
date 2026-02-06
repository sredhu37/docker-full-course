FROM node:24.13.0@sha256:1de022d8459f896fff2e7b865823699dc7a8d5567507e8b87b14a7442e07f206 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:24.13.0@sha256:1de022d8459f896fff2e7b865823699dc7a8d5567507e8b87b14a7442e07f206 AS final

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]