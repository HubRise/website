---
title: Récupérer des commandes
path_override: recuperer-commandes
position: 8
layout: documentation
meta:
  title: Récupérer des commandes | Shopify | HubRise
  description: Découvrez les détails techniques sur la récupération des commandes de Shopify à HubRise, et quels champs sont transmis ou non.
---

En connectant Shopify à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Cette page décrit les informations sur les commandes que HubRise reçoit de Shopify.

## Articles, options et promotions

Les commandes Shopify contiennent les informations complètes sur les articles, par exemple le nom, le code ref du logiciel de caisse, la quantité et le prix. Cependant, les options et les promotions ne sont pas prises en charge.

## Statuts de commande

Quand un statut de commande change dans HubRise, Shopify Bridge avertit Shopify, et le changement est visible par le client.

Sur la page de configuration de Shopify Bridge, vous pouvez personnaliser la façon d'associer les différents statuts de commande HubRise à Shopify. Pour plus d'informations, voir [Statuts de commande](/apps/shopify/configuration#order-statuses).

## Types de service

Shopify Bridge ne prend en charge que les commandes en livraison.

## Données clients

Shopify fournit des données clients complètes pour toutes les commandes.
Shopify Bridge crée un client dans HubRise à chaque fois que vous recevez une commande d'un nouveau client. Les données clients sont réutilisées ou mises à jour dans les commandes suivantes.

## Remises et frais

Shopify Bridge fournit des informations sur les remises et les frais de livraison, s'ils sont présents.

## Références techniques

Cette section explique comment les commandes sont encodées dans les requêtes JSON que vous recevez de Shopify Bridge.

### Articles

Pour chaque article de la commande, Shopify Bridge fournit les informations suivantes :

- `product_name` : nom du produit
- `sku_ref` : code ref de l'article
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande.

<details>

Voici un exemple de requête contenant un article unique.

```json
"items": [
  {
    "product_name": "Eiernoedels",
    "sku_ref": "1",
    "price": "4,50 EUR",
    "quantity": "1",
  }
]
```

</details>

### Client

Shopify Bridge inclut toujours toutes les données personnelles fournies par le client dans l'objet `customer`.
Ces informations sont stockées dans un client HubRise et peuvent être récupérées à l'aide de l'identifiant client HubRise.
Pour plus d'informations, voir [comment récupérer les données clients](/developers/api/customers#retrieve-customer) (en anglais).

### Remises

La remise appliquée à la commande est transmise en tant qu'objet unique dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise, par défaut "Total discount" (Remise totale)
- `price_off` : montant total de la remise

Shopify ne fournit pas de code ref pour les remises.

<details>

Voici un exemple de requête pour les remises.

```json
"discounts": [
  {
    "name": "10 % de réduction",
",
    "price_off": "0,50 EUR"
  }
]
```

</details>

### Frais de livraison

Shopify Bridge encode les frais de livraison dans le tableau `charges`, s'ils sont présents.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais de livraison, par défaut `Delivery charge` (Frais de livraison)
- `type` : type de frais. La valeur est toujours `delivery` (livraison).
- `price` : montant total des frais de livraison

Shopify ne fournit pas de code ref pour les frais de livraison.

<details>

Voici un exemple de requête pour les frais.

```json
"charges": [
  {
    "name": "Delivery charge",
    "type": "delivery",
    "price": "1,50 EUR"
  }
]
```

</details>

### Paiement

Les informations sur le paiement sont incluses dans le tableau `payments`. Un paiement unique est pris en charge par commande.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : nom de la méthode de paiement
- `type` : type de paiement. La valeur est toujours `online` (en ligne).
- `amount` : montant total du paiement

### Prix total

Le prix global réglé pour la commande, y compris les frais et remises appliqués, est encodé dans le champ `total`.
