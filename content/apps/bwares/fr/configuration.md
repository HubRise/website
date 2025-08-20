---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | BWares | HubRise
  description: Instructions pour configurer la connexion BWares avec HubRise afin qu'elle fonctionne parfaitement avec votre logiciel de caisse et les autres apps connectées.
---

Une fois la connexion entre BWares et HubRise établie, vous pouvez configurer l'intégration dans le back-office de BWares. Pour cela :

1. Depuis le back-office de BWares, cliquez sur **INTÉGRATIONS**.
2. Sur la page **GESTION DES INTÉGRATIONS**, trouvez HubRise et cliquez sur le bouton correspondant.
3. La configuration s’effectue depuis la page **MODIFICATION D'UNE CONFIGURATION EXISTANTE**.

## Type de vente

Si votre logiciel de caisse le nécessite, vous pouvez configurer les codes de ref des types de service, en utilisant les champs **SUR PLACE** ou **À EMPORTER**.

Dans cette section, vous pouvez également configurer la variante de catalogue HubRise utilisée lors de la récupération du catalogue, pour chaque type de vente.

![BWares, type de vente à configurer](./images/007-2x-type-de-vente.png)

## Type de paiement

Si votre logiciel de caisse le nécessite, vous pouvez définir les codes ref de paiement dans les champs **CARTE BANCAIRE** ou **ESPÈCES**.

![BWares, type de paiement à configurer](./images/008-2x-type-de-paiement.png)

## Options de Synchronisation

Vous pouvez choisir de synchroniser les horaires d’ouverture, le catalogue produits et les disponibilités de BWares avec ceux disponibles sur HubRise en cochant les cases correspondantes. La synchronisation devient alors automatique :

- **Synchroniser les horaires d’ouverture** : Les bornes sont bloquées en dehors des horaires définis dans HubRise.
- **Synchroniser le catalogue** : La carte présentée au client est mise à jour à chaque modification dans HubRise.
- **Synchroniser l’inventaire** : Les produits et ingrédients sont automatiquement retirés de la vente dès qu’ils sont en rupture de stock dans HubRise.

![BWares, options de Synchronisation](./images/009-2x-option-de-synchronisation.png)

## Pour aller plus loin

Pour plus d’informations sur le fonctionnement de l’intégration et les données échangées lors de la synchronisation, consultez la documentation disponible sur le site Internet de BWares, section [Intégration HubRise](https://bwares.notion.site/HubRise-23e20882788c8014a9adf1dad49ce6e7).
