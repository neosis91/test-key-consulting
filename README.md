# TestKeyConsulting

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

S'assurer d'avoir node en version 20, npm et angular installé globalement
Les 2 commandes à lancer pour executer le projet en local

```bash
npm i
```

```bash
npm start
```

## Comment j'ai construis le projet

J'ai utilisé la dernière version d'angular 19.2 avec material, tailwind et svg-icon.

J'ai crée la méthode get mais pour le test technique, pas vraiment utile de l'appeler.

Le projet a divers concept que j'ai mis en place:
 - la projection de contenu dans le head
 - des components enfants, je n'ai pas fais au niveau atomique (ça reste un test)
 - 1 seule instanciation du menu au lieu d'en avoir autant que de projets
 - j'ai volontairement scindé add et edit pour la boite de dialogue et importé le même formulaire. Il y a des règles de validators dedans.

Honnêtement, je ne sais pas jusqu'où je dois pousser le test et ce qui est vraiment attendu au final.
J'ai fais le minimum de travail que moi j'aurais attendu quand je fais passé des entretiens pour mes devs. 

J'ai rencontré une petite difficulté, tailwind dans sa nouvelle version sortie récemment, n'accepte plus le scss mais juste du css. J'ai du faire des petits ajustements pour material.


## Worklow

Les 3 parties suivantes sont intégrées dans un github workflow sur la branch main.
Les tests E2E ne passeront pas dans le workflow car je n'ai pas de serveur pour le tester avec une pipeline. Ils sont testable en local.

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
