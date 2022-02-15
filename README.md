
# Construisez une API sécurisée pour une application d'avis gastronomiques.
Vous trouverez dans ce repo les fichiers rendus pour la soutenace du projet 06 " Piiquante " réalisé dans le cadre du parcours développeur web proposée sur la plateforme Openclassrooms: [https://openclassrooms.com/fr/paths/185-developpeur-web](https://openclassrooms.com/fr/paths/185-developpeur-web).

***

 La marque de condiments à base de piment Piiquante, veut développer une application web de critique de sauces piquantes appelée « Hot Takes ». Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones », c'est pourquoi l'entreprise me contacte pour leur venir en aide sur ce nouveau projet.

 La responsable produit de Piiquante, Paula, souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes.

 Elle me demande, en tant que développeur back-end,  de développer l'API de leur application.

 Le front-end fournit est joint dans la partie frontend de ce dossier et est disponible sur [ce repo](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6) Github.

 Le cahier des charges / spécifications Piiquante sont téléchargeables [ici](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf).

# Comment utiliser ce dépot ?

Vous devrez disposer des dernières versions de NodeJS et de npm installées sur votre machine afin de pouvoir executer ce projet en local.

Télécharger et installer le logiciel NodeJS (comprend npm) à cette adresse :
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Partie back-end 
### Installation ###

Cloner ce repo :

```
git clone https://github.com/yoannperez/YoannPerez_6_15082021.git
```

Déplacez-vous dans le dossier Backend:

```
cd Backend
```

Installer les dépendances du projet :

```
npm install
```

Vous pourvez enfin démarrer le serveur avec la commande :

```
npm start
```
Le serveur devrait démarrer en `localhost`, sur le port `3000`. Si le port 3000 est utilisé par un autre processus, redémarrez
complètement votre ordinateur (pour permettre l'utilisation du port).

Note : Dans le cadre de la formation, le projet est livré par transfert direct de fichier. Pour des questions de sécurité, les informations de connexions à la base de donnée, ainsi que d'autres clés de sécurité, sont fournies dans un fichier de configuration non versionné. Si vous êtes sur ce repos et que vous voulez tester l'application, merci de me contacter par mail à cette adresse: yoann.perez@gmail.com.

# Partie Front-end (fournie par le commanditaire)

## Installation ##

Dépendances nécessaires:
- NodeJS 12.14 or 14.0.
- Angular CLI 7.0.2. ( npm install @angular/cli )

Déplacez-vous dans le dossier frontend:

```
cd frontend
```

Installer les dépendances du projet :

```
npm install
```

## Utilisation ##

Run `npm start`. Cette commande doit démarrer le serveur local et lancer votre navigateur.

En cas de problème sous mac os, utilisez:

```
npm run start:linux:darwin
```



























