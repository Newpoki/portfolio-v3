TODO:

Mettre à jour le CV au format PDF (erreur numéro téléphone)

- finir readme
- doc

# Portfolio

- Affichage simple CV
- gestion i18n
- gestion theme sombre / light

Responsive
Front: React / Redux / Typescript
Back: strapi
DB: mongodb

## setup front

yarn

yarn start

config .env

## setup back

## test

- expliquer test ducks qui sont fait
- expliquer test des thunks pas conseillé par redux-toolkit
- amélio futur: test custo mhooks + composants

## code style

- expliquer duplicate import

expliquer sort/import + problème patterns quiu ne fonctionnent pas dans la config dont know why + améliopration futur avec prettier

Pourquoi alias -> pour trier correctement import absolu de third party et des imports absolu ( du coup non ce sont des alias)

SETUP CRACO POUR ALIAS IMPORt: https://github.com/risenforces/craco-alias

expliquer comment rajouter un nouvel alias:

- On le met dans tsconfig.extend.json
- On l'ajoute dans le eslintrc.json
