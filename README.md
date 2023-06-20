# ASSIGNMENTS-API

Ce projet est la partie back webService utilisé pour la gestion des assignments du TP ASSIGNMENTS 

# Getting started 
- Les développeurs: 
    - Randriahamihaja Ambinintsoa Maria N°42
    - Ramaroson Andy Faniry N°37  

- Identifiant par défaut (identifant / mots de passe):
  - Admin : admin@gmail.com/admin
  - Etudiant :mlidden0@scribd.com/123
  - Professeur : hfolini9@123-reg.co.uk/123

- Donnée minimal présent : 
    - 100 étudiants
    - 10 matiéres et professeurs
    - 1000 assignments 

- lien vidéo démonstration :

- Hébergement sur render.com  : https://assignemts-front-andy-maria-37-42.onrender.com
Back: https://assignemts-api-andy-maria-37-42.onrender.com

### Setup
Pour construire et faire fonctionner l'application, vous avez besoin de

* NodeJS 
* express js 
* MongoDB 

## Installation du projet :

### Step 1
```shell
npm install express
```

### Step 2
```shell
git https://github.com/AndyFaniry/assignments-api-37-42.git
cd ASSIGNMENTS-API-37-42
```

### Step 3
Vérifier et modifier les informations dans .env selon vos besoin

### Step 4
```shell
npm run start:dev
```
Ouvrir postman et accéder l'url indiquer dans le terminal pour tester 


## Documentation 
Ce projet est composé :

### API pour la gestion des users
- login avec JSON Web Tokens (JWT)
- create user 
- update user
- find all
- find by id 
- delete user 

### API pour la gestion des matières
- create matière 
- update matière 
- find all
- find by id
- delete matière 

###  API pour la gestion des assignment
- find assignment sans pagination 
- find all assignments avec pagination et recherche multi-critère : ( auteur matière )
- find by id
- create assignment 
- update assignment 
- delete assignment 

###  API pour la gestion des photos 
- upload photo
- find photo by name 

## Element utilisé : 
- tutorial pour JSON Web Tokens :  https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
- tutorial pour file upload  : https://www.bezkoder.com/node-js-upload-store-images-mongodb/
- tutorial mongoose pour tout les manipulations de la base de donnée : https://mongoosejs.com/docs/

