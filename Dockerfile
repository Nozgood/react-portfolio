# Étape 1 : Construire l'application
FROM node:16-alpine AS build

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install --legacy-peer-deps

# Copie le reste du code de l'application
COPY . .

# Génère l'application en mode production
RUN npm run build

# Étape 2 : Utiliser un serveur NGINX pour servir l'application
FROM nginx:alpine

# Copie les fichiers générés du dossier build vers le dossier NGINX par défaut
COPY --from=build /app/build /usr/share/nginx/html


# Expose le port 80 pour accéder à l'application
EXPOSE 80

# Commande de démarrage NGINX
CMD ["nginx", "-g", "daemon off;"]