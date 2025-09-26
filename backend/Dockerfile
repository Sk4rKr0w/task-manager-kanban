FROM node:20-alpine

WORKDIR /app

# Installa dipendenze
COPY package*.json ./
RUN npm install

# Copia lo schema Prisma
COPY prisma ./prisma

# Monta il progetto
CMD ["npm", "run", "dev"]
