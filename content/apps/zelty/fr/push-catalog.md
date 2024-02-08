---
title: Exporter le catalogue
path_override: exporter-catalogue
position: 6
layout: documentation
meta:
  title: Exporter le catalogue | Zelty | HubRise
  description: Comment importer le catalogue depuis HubRise dans votre menu Zelty.
---

Zelty permet d'exporter la carte vers un catalogue HubRise. Vous pouvez ainsi synchroniser vos produits entre Zelty et vos autres applications.

Si l'application que vous souhaitez connecter ne permet pas d'importer un catalogue HubRise, vous devrez renseigner manuellement les codes ref des produits. Pour vérifier, reportez-vous à la documentation de l'autre application sur le site Internet de HubRise.

## Exporter le catalogue

### Exporter tous vos produits

Pour exporter tous vos produits de Zelty vers HubRise, procédez comme suit :

1. Dans le back-office Zelty, cliquez dans le menu de gauche sur **MarketPlace**.
1. Cliquez sur **HubRise**.
1. Sélectionnez **Gérer**, puis **Exporter ma carte vers HubRise** dans le menu déroulant qui s'affiche.
1. Vérifiez l'importation du catalogue dans HubRise. Pour plus d'informations sur la manière de gérer les catalogues dans HubRise, consultez notre [Aide sur les catalogues](/docs/catalog).

### Exporter une partie de vos produits

Vous pouvez également exporter une partie de vos produits vers HubRise. Cela vous permet d'enlever des articles qui ne doivent pas être utilisés par des applications connectées à HubRise.

Pour exporter une partie de vos produits, vous devez créer un **catalogue**. Pour créer un catalogue :

1. Dans le back-office Zelty, cliquez dans le menu de gauche sur **La carte** puis **Les catalogues**.
2. Cliquez sur le bouton **Créer un nouveau catalogue**.
3. Indiquez le nom du catalogue.
4. Cliquez sur le bouton **Sauvegarder**.
5. Cliquez sur le nouveau catalogue pour l'ouvrir.
6. Ajoutez une catégorie, puis des produits à partir de la carte principale. Référez-vous à la documentation de Zelty pour plus d'informations sur la manière de créer des catalogues.

Pour exporter un catalogue Zelty vers HubRise :

1. Dans le back-office Zelty, cliquez dans le menu de gauche sur **Les catalogues**.
1. En regard du nom du catalogue, cliquez sur la flèche vers le bas et sélectionnez **Envoyer vers**.
1. Cochez la case **HubRise**.
1. Le message suivant s'affiche : **Le catalogue est en cours de transfert vers HubRise**.
1. Vérifiez l'importation du catalogue dans HubRise. Pour plus d'informations sur la manière de gérer les catalogues dans HubRise, consultez notre [Aide sur les catalogues](/docs/catalog).

## Données exportées par Zelty

Zelty exporte les catégories, produits, options, images et promotions dans HubRise. Les tags, en revanche, ne sont pas exportées.

### Catégories

Lorsque vous exportez un catalogue, Zelty exporte les catégories.

Une catégorie nommée **Hidden** est créée dans HubRise avec le tag **hidden**. Cette catégorie est utilisée pour les produits ou menus qui ne sont associés à aucune catégorie dans Zelty.

### Produits et SKUs

Zelty exporte les produits vers HubRise avec une SKU unique générée automatiquement. Les images et descriptions des produits sont exportées.

Zelty n'exporte pas les tags créés manuellement dans Zelty. Cependant, Zelty associe le tag **deal_only** aux SKUs des produits exportés dans la catégorie spéciale **Hidden**.

### Options

Zelty exporte les options vers HubRise.

### Promotions

Zelty exporte les menus en tant que promotions HubRise.
