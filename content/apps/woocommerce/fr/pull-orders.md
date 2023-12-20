---
title: Récupérer des commandes
path_override: recuperer-commandes
position: 7
layout: documentation
meta:
  title: Récupérer des commandes | WooCommerce | HubRise
  description: Découvrez les détails techniques pour la récupération de commandes de WooCommerce à HubRise, et quels champs sont transmis ou non.
---

En connectant WooCommerce à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Cette page décrit les informations sur les commandes que HubRise reçoit de WooCommerce.

## Articles et options

Les commandes WooCommerce contiennent les informations complètes sur les articles et les options, par exemple le nom, le code ref du logiciel de caisse, la quantité et le prix. Le prix des options WooCommerce est toujours équivalent à zéro. Les promotions ne sont pas prises en charge.

De même, les avis formulés par les clients sur des produits individuels ne sont pas pris en charge dans WooCommerce. Si vous comptez sur ces avis pour les instructions de préparation ou de présentation (par exemple « Cuisson à point » ou « Couper en tranches »), vous devez ajouter les articles correspondants dans votre logiciel de caisse, puis les inclure en tant qu'options dans le menu WooCommerce. Ils seront ainsi correctement encodés.

## Statuts de commande

***

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts WooCommerce pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Processing` (En cours de traitement) est un statut WooCommerce, tandis que `acceptée` est un statut HubRise.

***

### Lorsque le statut change dans HubRise

Lorsque le statut de commande change dans HubRise, le statut dans WooCommerce change en respectant les associations suivantes :

| Statut HubRise         | Statut WooCommerce |
| ---------------------- | ------------------ |
| `reçue`                | `Pending`          |
| `acceptée`             | `Processing`       |
| `en préparation`       | `Processing`       |
| `attente livraison`    | `Processing`       |
| `attente récupération` | `Processing`       |
| `en livraison`         | `Processing`       |
| `terminée`             | `Completed`        |
| `rejetée`              | `Failed`           |
| `annulée`              | `Cancelled`        |
| `échec livraison`      | `Failed`           |

Les commandes WooCommerce sont créées dans HubRise avec le statut `nouvelle`.

### Lorsque le statut change dans WooCommerce

Lorsque le statut de commande change dans WooCommerce, le statut dans HubRise change en respectant les associations suivantes :

| Statut WooCommerce | Statut HubRise |
| ------------------ | -------------- |
| `Cancelled`        | `annulée`      |
| `Refunded`         | `annulée`      |
| `Failed`           | `rejetée`      |
| `Trash`            | `annulée`      |

## Types de service

Dans l'installation WooCommerce par défaut, le type de service est toujours `delivery`. Pour que des types de service supplémentaires soient pris en charge, vous devez personnaliser votre installation WooCommerce pour inclure cette valeur dans les métadonnées de commande.

***

**FAQ associée** : [Comment encoder des métadonnées personnalisées dans une commande ?](/apps/woocommerce/faqs/encode-custom-metadata)

***

## Données clients

WooCommerce Bridge fournit des données clients complètes pour les commandes, par exemple le nom, l'adresse de livraison et le numéro de téléphone, et les enregistre dans HubRise.

## Paiements

WooCommerce prend en charge quatre types de paiements dans une commande :

- Paiement à la livraison
- Chèque
- Virement bancaire
- Standard Paypal

***

**REMARQUE IMPORTANTE** : Les codes ref de paiement seront bientôt personnalisables depuis la page de configuration. Pour plus d'informations, veuillez contacter HubRise à l'adresse [support@hubrise.com](mailto:support@hubrise.com).

***

## Remises

Les remises WooCommerce sont envoyées à HubRise, si elles sont présentes dans une commande.

## Frais

WooCommerce ne prend en charge que les frais de livraison, qui sont envoyés à HubRise s'ils figurent dans une commande.

***

## Références techniques

Cette section explique comment les commandes sont encodées dans les requêtes JSON que vous recevez de WooCommerce Bridge.

### Articles

Les produits WooCommerce d'une commande sont associés à HubRise de la façon suivante :

- Les produits simples sont envoyés à HubRise en tant que produits sans SKU.
- Les variables de produits avec une liste d'attributs nommée **Size** sont envoyés à HubRise en tant que produits avec des SKU.
- Les variables de produits avec un nom de liste d'attributs autre que **Size** sont envoyés à HubRise en tant que produits avec des options.

Pour chaque article de la commande, WooCommerce Bridge fournit les informations suivantes :

- `product_name` : nom du produit
- `sku_name` : nom du SKU, pour les variables de produits WooCommerce avec le nom d'attribut **Size**. Sinon, la valeur par défaut est `null`.
- `sku_ref` : code ref de l'article
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande
- `options` : tableau des options rattachées à l'article, pour les variables de produits WooCommerce avec un nom d'attribut autre que **Size**. Sinon, la valeur par défaut est un tableau vide.

### Options

Si un produit contient une option, WooCommerce Bridge fournit les informations suivantes :

- `option_list_name` : emplacement réservé pour le nom de la liste d'options, avec la valeur par défaut "Options"
- `name` : nom de l'option

Un produit peut avoir au maximum une option rattachée.

<details>

Voici un exemple de requête contenant un article unique avec une option.

```json
"items": [
  {
    "product_name": "Végétarienne végane - Classique 30 cm",
    "sku_name": null,
    "sku_ref": "végétarienne_végane_classique_30cm",
    "price": "19,95 EUR",
    "quantity": "1",
    "tax_rate": null,
    "options": [
      {
        "option_list_name": "Options",
        "name": "Classique 30 cm"
      }
    ]
  }
]
```

</details>

### Client

Pour les nouveaux clients, WooCommerce Bridge crée un enregistrement `customer` dans HubRise. Pour les clients existants, WooCommerce Bridge ajoute simplement le `customer_id` de HubRise à la commande.

WooCommerce Bridge encode toutes les données clients à partir de WooCommerce, tels que :

- `address_1` : première ligne de l'adresse
- `address_2` : deuxième ligne de l'adresse
- `city` : ville
- `postal_code` : code postal
- `state` : État
- `e-mail` : adresse e-mail du client
- `phone` : numéro de téléphone du client
- `delivery_notes` : notes de livraison que le client laisse au moment du paiement

### Frais de livraison

Des frais de livraison s'appliquent aux commandes livrées par le restaurant.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais de livraison, par défaut `Delivery charge` (Frais de livraison)
- `ref` : code ref des frais. La valeur par défaut peut être définie dans la page de configuration de WooCommerce Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : montant total des frais de livraison

<details>

Voici un exemple de requête pour les frais.

```json
"charges": [
  {
    "name": "Delivery charge",
    "ref": "1111",
    "price": "3,50 EUR"
  }
]
```

</details>

## Remises

La remise appliquée à la commande est transmise dans un objet unique dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise
- `price_off` : montant total de la remise

## Champs personnalisés

L'objet `custom_fields` est utilisé par WooCommerce Bridge pour stocker les métadonnées que WooCommerce envoie dans la commande. Ces informations ne sont pas fournies par défaut par l'API WooCommerce, mais le format réel dépend des plugins installés et de la personnalisation du code effectuée sur le site internet.

Par exemple, l'objet `custom_fields` peut encoder le type de service ou l'heure de livraison estimée pour la commande.
