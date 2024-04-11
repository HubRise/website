---
title: Recevoir les commandes
path_override: recevoir-commandes
position: 5
layout: documentation
meta:
  title: Recevoir les commandes | Popina | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Popina. Connectez vos apps et synchronisez vos données
---

Lorsque Popina est connecté à HubRise, les commandes envoyées à HubRise arrivent automatiquement dans votre logiciel de caisse.

## Articles et options

### Traitement des articles inconnus

Si un article ou une option a un code ref non reconnu, Popina utilise le nom et le prix définis sur HubRise, et applique un taux de TVA par défaut. L'article ou l'option n'est pas décompté du stock, et il n'apparaît pas dans les rapports de vente.

### Traitement des différences de prix

En cas de différence de prix entre les articles d'une commande HubRise et les produits dans Popina, ce sont les prix envoyés par HubRise qui sont pris en compte.

## Types de service {#service-types}

Le code ref du type de service permet d'identifier le Fournisseur et la Marque virtuelle associés à la commande. Les fournisseurs suivants sont pris en charge : `UBEREATS`, `DELIVEROO`, `JUSTEAT`.

Le format du code ref est soit le nom du fournisseur, soit le nom du fournisseur suivi d'un tiret et du nom de la marque virtuelle. Par exemple, `UBEREATS` et `UBEREATS-Pizza30` sont tous deux valides.

## Statuts de commande

Popina passe automatiquement le statut des nouvelle commandes à **Reçue**.

Sur Popina, vous pouvez accepter ou annuler manuellement une commande, ou activer le mode d'acceptation automatique. Lorsque le statut de la commande est modifié sur Popina, le statut passe à **Acceptée** ou **Annulée** sur HubRise.

## Informations client

Les informations complètes sur le client, si elles sont disponibles, y compris le nom, l'e-mail et l'adresse de livraison sont envoyées à Popina.
