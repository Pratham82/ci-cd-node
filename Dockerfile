FROM node:12-stretch

RUN mkdir /home/node/src

WORKDIR /home/node/src

# Copying the package.json and pacakage-lock.json from the current directory to the working directory
COPY package.json package-lock.json ./

# Installing node modules inside of the container, npm ci will adhere to the package-lock.json and installs all the required modules
RUN npm ci

# . . Means copy everything from this directory to the Work directory
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
