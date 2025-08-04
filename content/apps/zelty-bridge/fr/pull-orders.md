---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 7
layout: documentation
meta:
  title: Recevoir des commandes | Zelty Bridge | HubRise
  description: Découvrez les détails techniques sur la réception des commandes de Zelty vers HubRise, la correspondance des champs et le workflow de mise à jour des statuts.
---

Zelty Bridge peut importer les commandes de votre logiciel de caisse Zelty vers HubRise en temps réel. Cela inclut les commandes créées dans Zelty, ainsi que toutes les modifications apportées aux commandes (ajout ou suppression d'articles et de paiements).

Cette page décrit les informations transmises de Zelty vers HubRise lorsque vous activez l'import des commandes.

## Configuration

Pour activer l'import des commandes de Zelty vers HubRise, activez l'option **Recevoir les commandes de Zelty** dans la page de configuration de Zelty Bridge. Pour plus d'informations, consultez la page [Configuration](/apps/zelty-bridge/configuration).

## Articles et options

### Articles

Pour chaque article de la commande Zelty, les informations suivantes sont transmises à HubRise :

- `product_name` : nom de l'article
- `sku_ref` : identifiant de l'article dans Zelty
- `price` : prix de base de l'article, incluant la TVA
- `tax_rate` : taux de TVA appliqué
- `quantity` : toujours défini à "1" (Zelty gère les quantités en répétant les lignes)
- `options` : liste des modificateurs associés

### Options

Les modificateurs Zelty sont transmis comme options HubRise avec :

- `option_list_name` : nom générique de la liste d'options
- `name` : nom du modificateur
- `ref` : identifiant du modificateur
- `price` : prix du modificateur
- `quantity` : quantité du modificateur

## Promotions

Les menus Zelty sont convertis en promotions (deals) dans HubRise :

- Chaque menu génère une promotion avec un `name` et un `ref` correspondant au menu Zelty
- Les plats du menu sont ajoutés comme lignes de promotion avec une référence `deal_key`
- Le prix du premier plat inclut le prix de base du menu
- Les plats supplémentaires ont un prix correspondant à leur supplément éventuel

## Informations client

Si la commande Zelty contient des informations client, Zelty Bridge :

1. Vérifie si le client existe déjà dans HubRise (via `private_ref`)
2. Crée ou met à jour le client si nécessaire
3. Associe la commande au client HubRise

Les informations client synchronisées incluent :

- `private_ref` : identifiant Zelty du client
- `email` : adresse e-mail
- `first_name` : prénom
- `last_name` : nom de famille
- `phone` : numéro de téléphone
- `birth_date` : date de naissance
- `company_name` : nom de la société
- `sms_marketing` : consentement marketing SMS
- `email_marketing` : consentement marketing e-mail
- `loyalty_cards` : carte de fidélité (si disponible)

## Paiements

Les transactions Zelty sont converties en paiements HubRise :

- `name` : méthode de paiement
- `amount` : montant du paiement
- `ref` : identifiant de la méthode de paiement

Zelty Bridge prend en charge les paiements multiples sur une même commande.

## Remises

Les remises appliquées dans Zelty sont transmises à HubRise avec :

- `name` : libellé de la remise
- `price_off` : montant de la remise

## Statuts de commande

Zelty Bridge synchronise les statuts de commande selon la correspondance suivante :

| Statut Zelty | Statut HubRise        | Description                      |
| ------------ | --------------------- | -------------------------------- |
| `production` | `in_preparation`      | Commande en cours de préparation |
| `ready`      | `awaiting_collection` | Commande prête                   |
| `ended`      | `completed`           | Commande terminée                |
| `cancelled`  | `cancelled`           | Commande annulée                 |
| `closed`     | `completed`           | Commande clôturée                |

## Types de service

Le modes de commande Zelty est converti en type de service HubRise : `delivery`, `collection` ou `eat_in`.

## Informations supplémentaires

### Identifiants de commande

- `ref` : référence tierce de la commande, si disponible
- `collection_code` : numéro d'affichage de la commande

### Autres champs

- `customer_notes` : commentaire de la commande
- `custom_fields.restaurant.table_name` : numéro de table, pour les commandes sur place

## Modification des commandes

Zelty Bridge gère les modifications de commandes :

1. Ajout d'articles : les nouveaux articles sont ajoutés à la commande existante
2. Suppression d'articles : les articles supprimés sont marqués comme `deleted: true`
3. Modification des quantités : gérée par ajout/suppression de lignes
4. Ajout de paiements : les nouveaux paiements sont ajoutés
5. Suppression de paiements : les paiements supprimés sont marqués comme `deleted: true`

Cette approche permet de maintenir un historique complet des modifications tout en reflétant l'état actuel de la commande.

### Commandes créées par HubRise

Si une commande a été initialement créée dans HubRise et envoyée à Zelty, Zelty Bridge reconnaît cette commande grâce à son identifiant unique. Dans ce cas :

- Les modifications apportées dans Zelty sont synchronisées vers HubRise
- La commande n'est pas dupliquée
- L'historique complet des modifications est préservé

Cela permet une synchronisation bidirectionnelle complète entre Zelty et HubRise.
