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

Sélectionnez la langue à utiliser pour les éléments génériques dans les reçus clients. Les langues disponibles sont :

- Français
- English

Cette langue sera utilisée pour les libellés standards comme "Frais de livraison" ou "Remise" qui peuvent apparaître sur les reçus.

## Commandes

### Récupérer les commandes Zelty dans HubRise

Activez cette option pour recevoir dans HubRise les commandes créées directement dans Zelty. Cela permet de centraliser toutes vos commandes, qu'elles proviennent de votre caisse ou d'autres canaux, dans un seul système.

Cette fonctionnalité est particulièrement utile si vous utilisez :

- Des solutions de paiement à table connectées à HubRise
- Des systèmes d'analyse de données qui nécessitent toutes vos commandes
- D'autres applications qui ont besoin d'accéder à l'ensemble de vos ventes

## Catalogue

### Choisissez quels produits importer depuis Zelty

Vous avez deux options pour l'import du catalogue :

- **Importer tous les produits, options et menus** : Sélectionnez cette option pour importer tous votre carte Zelty dans HubRise.
- **Importer des catalogues spécifiques** : Choisissez cette option si vous souhaitez importer uniquement certains catalogues. Une liste déroulante apparaîtra pour vous permettre de sélectionner les catalogues à importer.

### Variantes de prix

Cochez l'option **Créer des variantes pour les prix livraison, à emporter et Happy Hour** pour gérer automatiquement les différents tarifs selon le type de service ou l'heure de la journée.

Lorsque cette option est activée, Zelty Bridge créera automatiquement des variantes dans votre catalogue HubRise pour :

- Les prix à emporter
- Les prix livraison
- Les prix Happy Hour

Cela permet à vos applications connectées d'appliquer automatiquement les bons tarifs selon le contexte de la commande.

### Récupération automatique du catalogue

Activez cette option pour que votre catalogue HubRise soit automatiquement mis à jour lorsque vous modifiez votre menu dans Zelty.

Le catalogue spécifié sera mis à jour automatiquement chaque fois que :

- Vous ajoutez ou supprimez des produits dans Zelty
- Vous modifiez des prix ou des descriptions
- Vous réorganisez vos catégories

Cette synchronisation automatique garantit que toutes vos applications connectées disposent toujours des informations à jour.

## Point de vente

### Horaires d'ouverture

Activez la synchronisation des horaires d'ouverture pour que vos horaires définis dans Zelty soient automatiquement transmis à HubRise et à toutes vos applications connectées.

### Acceptation des commandes et temps de préparation

Cette option synchronise deux paramètres importants :

- **Le statut d'acceptation des commandes** : indique si vous acceptez actuellement les commandes en ligne
- **Le temps de préparation** : le délai nécessaire pour préparer une commande

Ces informations sont particulièrement importantes pour les plateformes de commande en ligne et de livraison, qui les utilisent pour informer les clients et gérer les attentes de livraison.

## Inventaire

### Activer la récupération automatique de l'inventaire

Lorsque cette option est activée, Zelty Bridge synchronise automatiquement vos niveaux de stock avec HubRise.

Les mises à jour d'inventaire sont déclenchées lorsque :

- Un produit est marqué comme indisponible dans Zelty
- Un produit redevient disponible
- Les quantités en stock changent

Cette synchronisation permet à toutes vos applications connectées (sites de commande en ligne, plateformes de livraison) de refléter en temps réel la disponibilité de vos produits.

## Actions

En bas de la page Configuration, vous trouverez deux boutons d'action :

- **Récupérer le catalogue** : Lance manuellement l'import du catalogue depuis Zelty vers HubRise
- **Récupérer l'inventaire** : Lance manuellement la synchronisation de l'inventaire

Ces actions manuelles sont utiles lorsque vous souhaitez forcer une mise à jour immédiate sans attendre la synchronisation automatique.

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
