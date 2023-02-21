# Schedule Demo

* Schedule Demo est un projet NextJS.
* Il utilise pour simuler la partie backend et la DB json-server.
* Il utilise pour simuler auth0 json-server-auth.

* Un composant AuthProvider a été développé pour verifier l'identification de l'utilisateur
* La librairie React MUI a été utilisé pour les composants graphiques.
* La librairie react-query a été utilisée pour acceder à l'interface REST exposé par json-server
* Le thème à été customisé: police, couleurs, override des composants et custom style


## Installation

1. Ouvrir un terminal et faire `npm install`.


## Lancement

1. Ouvrir un deuxième terminal et faire `npm run start:db`pour lancer le DB et la back API.
2. Revenir sur le premier terminal et faire `npm run dev`
3. Ouvrir un navigateur et entrée `localhost:3000`


NB: A chaque lancement de `start:db`, la db est réinitialisée.

## Temps de réalisation

* Environ 5 jours


## Points d'améliorations

* La gestion des erreurs
* Lenteur affichage user profile
* Formulaire de login dont les textfields ne concordent pas avec le reste
