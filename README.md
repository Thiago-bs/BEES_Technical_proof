# Technical test - ReactJS 

## Main dependencies.
 In this document, it is demonstrated how to execute the project in development and in production using DOCKER.

 The main dependencies needed to run in developer mode are: NODE and NPM or YARN. 
 
 To run in production just have the docker installed and configured. 
 
 For more information on how to install NODE click on [here](https://nodejs.org/en/)

 For more information on how to install NPM click on [here](https://www.npmjs.com/)

 For more information on how to install YARN click on [here](https://yarnpkg.com/)

 For more information on how to install DOCKER click on [here](https://www.docker.com/)


 ## Steps to run the project.
 ### 1. Development:
 1.1. Unzip the project zip provided via email or click [here](https://github.com/Thiago-bs/BEES_Technical_proof) to clone it via github.

 1.2. Go to terminal and access the folder **server** and **client** contained within the project and execute the command below.

```CMD
    npm install 
        or
    yarn install
```
 1.3. After installing necessary dependencies, open two terminals and access the folders **server** and **client** and run the commands below to run the project. thus connecting the backend and frontend modules.

```CMD
    npm install 
        or
    yarn install
```
 1.4. After the backend and frontend modules are connected by the terminal, open your preferred browser and access http://localhost:3000 to visualize the application.

### 2. Production using DOCKER

2.1. Access the project's root directory and execute the command below to download the necessary dependencies.

```docker
   docker-compose build
```

2.2. Run the command below to start the project.

```docker
   docker-compose up -d
```
2.3. Open your preferred browser and access localhost:80 or, 
if you want to access from another device on the same network, just check your IP.

## Technology you will find in this project. 

* React with TypeScript.
* React using basic hooks.
* React using redux.
* NodeJS with TypeScript.
* DOCKER for deploying the application.


