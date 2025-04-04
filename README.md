# TestKeyConsulting - informations sur le projet et mon approche

Ce projet a été généré en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Serveur de développement

S'assurer d'avoir Node en version 20, npm et Angular installés globalement.
Les deux commandes à lancer pour exécuter le projet en local :

```bash
npm i
```

```bash
npm start
```

## Comment j'ai construit le projet

J'ai utilisé la dernière version d'Angular 19.2 avec Material, Tailwind et svg-icon.

J'ai créé la méthode get, mais pour le test technique, il n'est pas vraiment utile de l'appeler.

Le projet a divers concepts que j'ai mis en place :

*   La projection de contenu dans le head
*   Des components enfants, je n'ai pas fait au niveau atomique (ça reste un test)
*   Une seule instanciation du menu au lieu d'en avoir autant que de projets
*   J'ai volontairement scindé add et edit pour la boîte de dialogue et importé le même formulaire. Il y a des règles de validators dedans.

Honnêtement, je ne sais pas jusqu'où je dois pousser le test et ce qui est vraiment attendu au final.
J'ai fait le minimum de travail que moi j'aurais attendu quand je fais passer des entretiens pour mes devs.

J'ai rencontré une petite difficulté : Tailwind, dans sa nouvelle version sortie récemment, n'accepte plus le scss mais juste du css. J'ai dû faire des petits ajustements pour Material.

## Workflow

Les trois parties suivantes sont intégrées dans un GitHub workflow sur la branche main.
Les tests E2E ne passeront pas dans le workflow car je n'ai pas de serveur pour le tester avec une pipeline. Ils sont testables en local.

## Linter et formatter

J'aime, dans un projet avec plusieurs développeurs, que l'on respecte des syntaxes et des règles entre développeurs.
Je force mes devs à avoir des règles que l'on définit ensemble.
J'ai donc ajouté pour le projet eslint pour le linter le code et Prettier pour le formatter.
Prettier est couplé directement dans eslint.
Pour bien faire les choses, j'aurais pu ajouter un hook du style husky, pour exécuter un pre-commit et forcer l'exécution de cette commande.

Pour le lancer :

```bash
ng lint
```

## Lancement des tests unitaires

J'ai utilisé Jest pour ajouter 3 tests unitaires. C'est un petit projet, il n'y a pas trop d'intérêt à en mettre en place en vrai.
J'ai mocké MatDialog et projetService pour faire mes 3 tests.

Pour lancer les tests:

```bash
npm run test
```

## Lancement des tests end-to-end

Je suis à l'aise avec cypress mais j'avais très envie de tester playwright qui est la lib montante pour les test E2E. 
Ce projet de test est aussi l'occasion pour moi de le découvrir.
J'ai eu comme difficulté que Jest et Playwright acceptent les même extensions de fichiers lors de la configuration.
Mes 4 tests sont très basique. Test sur 3 navigateurs ce qui donnera 12 tests en sortie.

installation de playwright

```bash
npm init playwright@latest
```

lancement de playwright (12 tests)

```bash
npm run e2e
```
mode graphique
```bash
npm run e2e-ui
```

## Compodoc

Une librairie que j'aime bien qui permet de générer une documentation technique. 
C'est très utile pour les nouveaux arrivants sur un projet ou pour diffuser de la documentation technique en interne.

```bash
npm run compodoc:build-and-serve
```
