---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Zelty Bridge | HubRise
  description: Instructions pour configurer Zelty Bridge afin qu'il fonctionne parfaitement avec Zelty et les autres apps connectées à HubRise. La configuration est simple.
---

La page de configuration vous permet de personnaliser le comportement de Zelty Bridge selon vos besoins. Elle est divisée en plusieurs sections pour faciliter la navigation.

![Page de configuration - Étape 2](./images/002-zelty-config-step-2.png)

## Langue

Choisissez la langue à utiliser pour les éléments génériques tels que `Adresse par défaut`. Ces noms peuvent apparaître dans votre logiciel de caisse et sur les reçus des clients.

## Commandes

### Récupérer les commandes Zelty dans HubRise

Activez l'option **Récupérer les commandes Zelty dans HubRise** pour recevoir dans HubRise les commandes créées directement dans Zelty. Cela permet de centraliser toutes vos commandes, qu'elles proviennent de votre caisse ou d'autres canaux, dans un seul système.

Cette fonctionnalité est utile si vous utilisez :

- Des solutions de paiement à table connectées à HubRise
- Des systèmes d'analyse de données qui nécessitent toutes vos commandes
- D'autres applications qui ont besoin d'accéder à l'ensemble de vos ventes

## Catalogue {#catalog}

### Choisissez quels produits importer depuis Zelty {#select-catalog}

Vous avez deux options pour l'import du catalogue :

- **Importer tous les produits, options et menus** : Sélectionnez cette option pour importer tous votre carte Zelty dans HubRise.
- **Importer des catalogues spécifiques** : Choisissez cette option si vous souhaitez importer uniquement certains catalogues. Une liste déroulante apparaîtra pour vous permettre de sélectionner les catalogues à importer.

### Variantes de prix

Cochez l'option **Créer des variantes pour les prix livraison, à emporter et Happy Hour** pour importer ces tarifs dans HubRise. Lorsque cette option est activée, Zelty Bridge créera automatiquement une variante de catalogue HubRise par tarif.

### Récupération automatique du catalogue

Cochez l'option **Activer la récupération automatique du catalogue** pour que votre catalogue HubRise soit automatiquement mis à jour lorsque vous le publiez depuis le back-office Zelty.

Lorsque cette option est activée, vous pouvez déclencher une mise à jour du catalogue directement depuis le back-office Zelty. Pour plus d'informations, consultez [Récupérer le catalogue](/apps/zelty-bridge/pull-catalog#via-zelty-bo).

## Point de vente

### Horaires d'ouverture

Activez l'option **Activer la synchronisation des horaires d'ouverture** pour synchroniser automatiquement vos horaires d'ouverture entre Zelty et HubRise. Pour plus d'informations, consultez [Synchroniser le point de vente](/apps/zelty-bridge/sync-location).

### Acceptation des commandes et temps de préparation

Activez l'option **Activer la synchronisation de l'acceptation des commandes et du temps de préparation** pour gérer automatiquement la disponibilité de votre restaurant et les délais de préparation. Pour plus d'informations, consultez [Synchroniser le point de vente](/apps/zelty-bridge/sync-location).

## Inventaire {#inventory-sync}

Activez l'option **Activer la récupération automatique de l'inventaire** pour synchroniser automatiquement les ruptures de stock entre Zelty et HubRise. Pour plus d'informations, consultez [Synchroniser l'inventaire](/apps/zelty-bridge/sync-inventory).

## Enregistrer la configuration

Pour valider vos modifications, cliquez sur le bouton **Enregistrer** en haut de la page. Les changements prennent effet immédiatement.

## Réinitialiser la configuration

Si vous avez besoin de repartir de zéro, utilisez le lien **Réinitialiser la configuration** en bas de la page. Cette action :

- Efface tous vos paramètres actuels
- Vous ramène à la page de saisie de la clé API
- Ne supprime pas les logs d'opérations

---

**REMARQUE IMPORTANTE :** La réinitialisation de la configuration nécessite de ressaisir votre clé API Zelty.

---
