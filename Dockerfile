FROM node:18-apline 
WORKDIR /app 
COPY package*.json ./
RUN nmp ci --only=production 
COPY src ./src
EXPOSE 3000 
CMD ["node", "src/app.js"]