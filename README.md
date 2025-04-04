# TestKeyConsulting

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

S'assurer d'avoir node en version 20 et npm
Les 2 commandes à lancer pour zxecuter le projet en local

```bash
npm i
```

```bash
ng serve
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```


Les 3 parties suivantes sont intégrées dans un github workflow sur la branch main.

## Linter et formatter

J'aime dans un projet avec plusieurs développeurs que l'on respecte des syntaxes et des règles entre développeurs.
Je force mes dev à avoir des règles que l'on définit ensemble.
J'ai donc ajouté pour le projet eslint pour le linter le code et prettier pour le formatter.
Prettier est couplé directement dans eslint.
Pour bien faire les choses j'aurai pu ajouter un hook du style husky, pour executer un pre-commit et forcer l'execution de cette commande.

Pour le lancer
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
J'ai eu comme difficulté que Jest et Playwright accepte les même extensions de fichiers lors de la configuration.
Mes 4 tests sont très basique. Test sur 3 navigateurs ce qui donnera 12 tests en sortie.

installation de playwright

```bash
npm init playwright@latest
```

lancement de playwright (12 tests)

```bash
npx playwright test
```
mode graphique
```bash
npx playwright test --ui
```
