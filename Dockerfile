# Selecciona la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 
EXPOSE 1234

# Inicia la aplicación
CMD ["node", "src/index.js"]