# Application de recherche de films (TMDb + PHP)

## Installation
1. Cloner le repo :
   ```bash
   git clone https://github.com/ThomasDlx/TestPHP.git
   ```

2. Ajouter une clé API TMDb dans le fichier `config/config.php`.

## Fonctionnalités
- Recherche de films par titre
- Affichage des résultats avec affichage des posters
- Journalisation des recherches

## Utilisation de l'application

1. Accéder à l'application via un serveur web.
2. Utiliser le formulaire de recherche pour trouver des films.
3. Les résultats s'affichent sous le formulaire.
4. Les recherches sont journalisées dans le fichier `logs/search.log`.

## Code

- `public/index.html` : Page principale avec le formulaire de recherche.
- `public/script.js` : Script JavaScript pour gérer les requêtes AJAX.
- `public/api.php` : Point d'entrée de l'API pour interroger TMDb.
- `config/config.php` : Fichier de configuration contenant la clé API.
- `logs/search.log` : Fichier journalisant les recherches effectuées.
- `.gitignore` : Fichier pour ignorer les dossiers `config` et `logs` dans le contrôle de version.

- `améliorations possibles` : 
  - Ajouter des tests unitaires pour le code PHP.
  - Implémenter une pagination pour les résultats de recherche.
  - Rajouter des infos de l'api dans les résultats (ex: note, nombre de votes, trailer) mais cela fonctionne de la même manière que pour le titre et la description.

