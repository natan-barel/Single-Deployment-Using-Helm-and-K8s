FROM node:latest
COPY . /natan-barel-portfolio
RUN cd /natan-barel-portfolio; npm install
EXPOSE 3000
WORKDIR /natan-barel-portfolio 
ENTRYPOINT ["npm", "start"]
