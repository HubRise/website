---
title: Récupérer des commandes
path_override: recuperer-commandes
position: 8
layout: documentation
meta:
  title: Récupérer des commandes | PrestaShop | HubRise
  description: Découvrez les détails techniques sur la récupération des commandes de PrestaShop à HubRise, et quels champs sont transmis ou non.
---

En connectant PrestaShop à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Cette page décrit les informations sur les commandes que HubRise reçoit de PrestaShop.

## Articles, options et promotions

Les commandes PrestaShop contiennent les informations complètes sur les articles, par exemple le nom, le code ref du logiciel de caisse, la quantité et le prix. Cependant, les options et les promotions ne sont pas prises en charge.

## Statuts de commande

Quand un statut de commande change dans HubRise, PrestaShop Bridge avertit PrestaShop, et le changement est visible par le client.

Sur la page de configuration de PrestaShop Bridge, vous pouvez personnaliser la façon d'associer les différents statuts de commande HubRise à PrestaShop. Pour savoir comment associer les statuts de commande sur la page de configuration, voir [Statuts de commande](/apps/prestashop/configuration#order-statuses).

## Types de service

PrestaShop Bridge envoie à HubRise les informations sur le transporteur utilisées pour la livraison. Sur la page de configuration, vous pouvez personnaliser le code ref associé à chaque transporteur. Pour savoir comment définir le code ref pour les types de service, voir [Types de service](/apps/prestashop/configuration#service-types).

## Données clients

PrestaShop fournit des données clients complètes pour toutes les commandes. PrestaShop Bridge crée un client dans HubRise à chaque fois que vous recevez une commande d'un nouveau client. Les données clients sont réutilisées ou mises à jour dans les commandes suivantes.

## Remises et frais

PrestaShop Bridge fournit des informations sur les remises et les frais de livraison, s'ils sont présents.

## Références techniques

Cette section explique comment les commandes sont encodées dans les requêtes JSON que vous recevez de PrestaShop Bridge.

### Articles

Pour chaque article de la commande, PrestaShop Bridge fournit les informations suivantes :

- `product_name` : nom de l'article
- `sku_name` : nom du SKU ou de la variante, le cas échéant
- `sku_ref` : code ref de l'article
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande

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

PrestaShop Bridge inclut toujours toutes les données personnelles fournies par le client dans l'objet `customer`. Ces informations sont stockées dans un client HubRise et peuvent être récupérées à l'aide de l'identifiant client HubRise. Pour plus d'informations, voir [comment récupérer les données clients](/developers/api/customers#retrieve-customer) (en anglais).

### Remises

La remise appliquée à la commande est transmise en tant qu'objet unique dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise, par défaut "Discount"
- `price_off` : montant total de la remise

PrestaShop ne fournit pas de code ref pour les remises.

<details>

Voici un exemple de requête pour les remises.

```json
"discounts": [
  {
    "name": "Discount",
",
    "price_off": "0,50 EUR"
  }
]
```

</details>

### Frais de livraison

PrestaShop Bridge encode les frais de livraison dans le tableau `charges`, s'ils sont présents.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais de livraison, par défaut `Delivery charge`
- `ref` : code ref des frais que vous avez définis sur la page de configuration
- `price` : montant total des frais de livraison
- `tax_rate` : pourcentage de taxe appliqué aux frais de livraison

### Frais d'emballage

PrestaShop Bridge encode les frais d'emballage dans le tableau `charges`, s'ils sont présents.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais d'emballage, par défaut `Wrapping charge`
- `ref` : code ref des frais que vous avez définis sur la page de configuration
- `price` : montant total des frais d'emballage
- `tax_rate` : pourcentage de taxe appliqué aux frais d'emballage

<details>

Voici un exemple de requête pour les frais.

```json
"charges": [
  {
    "name": "Delivery charge",
    "price": "1,50 EUR",
    "ref": "DELCH",
    "tax_rate": 4
  },
  {
    "name": "Wrapping charge",
    "price": "0,50 EUR",
    "ref": "WRAPCH",
    "tax_rate": 4
  }
]
```

</details>

### Paiement

Les informations sur le paiement sont incluses dans le tableau `payments`. Un paiement unique est pris en charge par commande.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : nom de la méthode de paiement
- `ref` : code ref du paiement que vous avez défini sur la page de configuration
- `amount` : montant total du paiement
