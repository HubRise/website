---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 7
layout: documentation
meta:
  title: Recevoir des commandes | Zelty Bridge | HubRise
  description: Découvrez les détails techniques sur la réception des commandes de Zelty vers HubRise, la correspondance des champs et le workflow de mise à jour des statuts.
---

Zelty Bridge peut importer les commandes de votre logiciel de caisse Zelty vers HubRise en temps réel. Cela inclut les commandes créées dans Zelty, ainsi que toutes les modifications apportées aux commandes, dont l'ajout et la suppression d'articles et de paiements.

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

- `option_list_name` : la valeur est toujours "Options", Zelty ne communiquant pas le nom de la liste d'options
- `name` : nom du modificateur
- `ref` : identifiant du modificateur dans Zelty
- `price` : prix du modificateur
- `quantity` : quantité du modificateur

## Promotions

Les menus Zelty sont convertis en promotions (deals) dans HubRise :

- Chaque menu génère une promotion avec un `name` et un `ref` correspondant au menu Zelty
- Les plats du menu sont ajoutés comme lignes de promotion
- Le prix du premier plat inclut le prix de base du menu
- Les plats supplémentaires ont un prix correspondant à leur supplément éventuel

## Remises

Les remises appliquées dans Zelty sont transmises à HubRise avec :

- `name` : libellé de la remise
- `price_off` : montant de la remise

## Paiements

Les transactions Zelty sont converties en paiements HubRise :

- `name` : méthode de paiement
- `amount` : montant du paiement
- `ref` : identifiant de la méthode de paiement

Zelty Bridge prend en charge les paiements multiples sur une même commande.

## Statuts de commande

Zelty Bridge synchronise les statuts de commande selon la correspondance suivante :

| Statut Zelty | Statut HubRise        | Description                      |
| ------------ | --------------------- | -------------------------------- |
| `production` | `in_preparation`      | Commande en cours de préparation |
| `ready`      | `awaiting_collection` | Commande prête                   |
| `ended`      | `completed`           | Commande terminée                |
| `cancelled`  | `cancelled`           | Commande annulée                 |
| `closed`     | `completed`           | Commande clôturée                |

## Modification des commandes

Lorsqu'une commande est modifiée dans Zelty, Zelty Bridge modifie la commande correspondante dans HubRise, peu importe qu'elle ait été créée depuis HubRise ou depuis Zelty puis importée dans HubRise. Les modifications supportées sont :

- Ajout ou suppression d'articles
- Ajout ou suppression de paiements

Cette synchronisation bidirectionnelle permet de couvrir de multiples scénarios : dans le cas du paiement à table par exemple, une commande peut être payée intégralement dans l'application, ou payée partiellement dans Zelty puis le solde réglé dans l'application. De même, des articles peuvent être ajoutés alternativement dans Zelty et dans une application de commande à table.

## Types de service

Le modes de commande Zelty est converti en type de service HubRise : `delivery`, `collection` ou `eat_in`.

## Informations client

Si la commande Zelty contient des informations client, Zelty Bridge :

1. Vérifie si le client existe déjà dans HubRise
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
- `loyalty_cards` : carte de fidélité avec `ref` correspondant à l'identifiant de fidélité Zelty. Le solde de la carte n'est pas synchronisé.

## Informations supplémentaires

### Identifiants de commande

- `ref` : référence tierce de la commande, si disponible
- `collection_code` : numéro d'affichage de la commande

### Autres champs

- `customer_notes` : commentaire de la commande
- `custom_fields.restaurant.table_name` : numéro de table, pour les commandes sur place
