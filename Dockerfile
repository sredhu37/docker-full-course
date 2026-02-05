FROM node:24.13.0@sha256:1de022d8459f896fff2e7b865823699dc7a8d5567507e8b87b14a7442e07f206

WORKDIR /app

# Option 1: COPY and Extract using tar
# COPY nginx-1.9.9.tar.gz ./
# RUN tar -xzf nginx-1.9.9.tar.gz

# Option 2: ADD
ADD nginx-1.9.9.tar.gz ./

# Download a file from the internet
ADD https://raw.githubusercontent.com/github/gitignore/refs/heads/main/Node.gitignore /app/.gitignore

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]