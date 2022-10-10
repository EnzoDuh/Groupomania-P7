# Réseau social de GROUPOMANIA

Cette application a été créée avec React-JS pour la partie frontend.\
Et Node-JS pour la partie backend.\
Une base de données SQL y est égalemment associée.

## Installation de l'application GROUPOMANIA

Cloner l'application à partir de ce [repository GIT](https://github.com/EnzoDuh/Groupomania-P7/tree/master)

-----------------

## BACK-END

### Installation

1. Depuis le terminal, se placer dans le dossier `/backend`.
2. Lancer la commande `npm install`.
3. Créer un fichier `.env` à la racine du dossier `/backend` et y entrer les informations suivantes:
    * PORT=5000
    * USERDB="utilisateur de votre base de données SQL"
    * PASSWORDDB="mot de passe de cet utilisateur"
    * HOSTDB="host de votre base de données"
    * DATABASE="nom de la base de données à créer"
    * JWT_SECRET_KEY="clé secrète pour les JSON web token"
4. Lancer la commande `node dbConfig.js` pour configurer la base de données.

### Démarrage

Lancer la commande `npm start`.

-----------------

## FRONT-END

### Installation

1. Depuis le terminal, se placer dans le dossier `/frontend`.
2. Lancer la commande `npm install`.
3. Créer un fichier `.env` à la racine du dossier `/frontend` et y entrer les informations suivantes:
    * REACT_APP_API_URL=http://localhost:5000

### Démarrage

Lancer la commande `npm start`.
