# Prova técnica - ReactJS 

## Principais dependencias.
 Neste documento, é demonstrado como executar o projeto em desenvolvimento e em produção utilizando DOCKER.
 As principais dependencias necessarias para executar em modo desenvolvedor são: NODE e NPM ou YARN. 
 Para executar em produçao basta ter o docker instalado e configurado. 
 
 Para mais informaçoes sobre como instalar click em [NODE](https://nodejs.org/en/)

 Para mais informaçoes sobre como instalar click em [NPM](https://www.npmjs.com/)

 Para mais informaçoes sobre como instalar click em [YARN](https://yarnpkg.com/)

 Para mais informaçoes sobre como instalar click em [DOCKER](https://www.docker.com/)


 ## Passos para executar o projeto.
 ### 1. Desenvolvimento:
 1.1. Descompacte o zip do projeto fornecido via email ou click [aqui](https://github.com/Thiago-bs/BEES_Technical_proof) para clona-lo via github.

 1.2. Via terminal acesse a pasta **server** e **client** contida dentro do projeto e execute o comando abaixo.

```CMD
    npm install 
        or
    yarn install
```
 1.3. Após a instalaçao de dependencias necessarias, abra dois terminais e acesse as pastas **server** e **client** e execute os comandos abaixo para executar o projeto. ligando assim os modulos backend e frontend.

```CMD
    npm install 
        or
    yarn install
```
 1.4. Após os modulos backend e frontend estarem ligados via terminal, abra seu navegador de preferencia e acesse http://localhost:3000 para visualizar a aplicação.

### 2. Produção utilizando DOCKER

2.1. Acesse o diretorio raiz do projeto e execute o comando abaixo para baixar as depencencias necessarias.

```docker
   docker-compose build
```

2.2. Execute o comando abaixo para iniciar o projeto.

```docker
   docker-compose up -d
```
2.3. Abra seu navegador de preferencia e acesse localhost:80 ou, caso queira acessar de outro dispositivo estando na mesma rede, basta verificar qual é seu IP. 

## Tecnologia que você encontrará neste projeto. 

* React com TypeScript.
* React utilizando hooks basicos.
* React utilizando redux.
* NodeJS com TypeScript.
* DOCKER para o deploy da aplicação.


