FROM node:20-bullseye

WORKDIR /app

# Copia solo i file di dipendenze e installa
COPY package*.json ./
RUN npm install

# Copia tutto il resto del progetto
COPY . .

EXPOSE 3000

# Comando per dev mode con hot-reload
CMD ["npm", "run", "dev"]
