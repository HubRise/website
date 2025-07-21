---
title: Récupérer des commandes
path_override: recuperer-commandes
position: 8
layout: documentation
meta:
  title: Récupérer des commandes | WooCommerce | HubRise
  description: Découvrez les détails techniques pour la récupération de commandes de WooCommerce à HubRise, et quels champs sont transmis ou non.
---

En connectant WooCommerce à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Cette page décrit les informations sur les commandes que HubRise reçoit de WooCommerce.

## Articles et options

Les commandes WooCommerce contiennent toutes les informations nécessaires pour chaque produit, notamment le nom, le code ref, la quantité et le prix.

Les lignes d'options contiennent le nom de l'option et, lorsque disponible, un code ref. Ce code est extrait si la valeur de l’option suit le format `Nom de l’option [[CODE_REF]]` ; sinon, la valeur complète est utilisée comme nom et aucun code ref n’est transmis. Les prix des options sont toujours à zéro dans WooCommerce.

Les promotions (deals) ne sont pas prises en charge.

De même, les avis formulés par les clients sur des produits individuels ne sont pas pris en charge dans WooCommerce. Si vous comptez sur ces avis pour les instructions de préparation ou de présentation (par exemple « Cuisson à point » ou « Couper en tranches »), vous devez ajouter les articles correspondants dans votre logiciel de caisse, puis les inclure en tant qu'options dans le menu WooCommerce. Ils seront ainsi correctement encodés.

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts WooCommerce pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Processing` (En cours de traitement) est un statut WooCommerce, tandis que `accepté` est un statut HubRise.

---

### Lorsque le statut change dans HubRise

Lorsque le statut de commande change dans HubRise, le statut dans WooCommerce est modifié selon la correspondance suivante :

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

---

**FAQ associée** : [Comment encoder des métadonnées personnalisées dans une commande ?](/apps/woocommerce/faqs/encode-custom-metadata)

---

## Horaires des commandes

WooCommerce ne prend pas en charge nativement les heures de livraison ou de collecte, vous devez utiliser un plugin pour ajouter cette fonctionnalité. WooCommerce Bridge prend en charge plusieurs formats pour les horaires des commandes, qui peuvent être envoyées soit dans les métadonnées de la commande, soit dans les métadonnées des lignes d'expédition, selon le plugin utilisé.

Pour les détails de configuration et les formats d'heure pris en charge, consultez la section [Heure souhaitée](/apps/woocommerce/configuration#expected-time) de la page de configuration.

## Données clients

WooCommerce Bridge transmet des données clients complètes pour les commandes, notamment le nom, l'adresse de livraison et le numéro de téléphone, et les enregistre dans HubRise.

## Paiements

WooCommerce prend en charge quatre types de paiements dans une commande :

- Paiement à la livraison
- Chèque
- Virement bancaire
- Standard Paypal

---

**REMARQUE IMPORTANTE :** Les codes ref de paiement seront bientôt personnalisables depuis la page de configuration. Pour plus d'informations, contactez HubRise sur support@hubrise.com.

---

## Remises

Les remises WooCommerce sont envoyées à HubRise, si elles sont présentes dans une commande.

## Frais

WooCommerce prend en charge deux types de frais :

- Frais d'expédition.
- Frais additionnels.

Les deux types sont envoyés à HubRise, lorsqu'ils sont présents dans une commande.

## Références techniques

Cette section explique comment les commandes sont encodées dans les requêtes JSON que vous recevez de WooCommerce Bridge.

### Articles

La correspondance entre les articles de WooCommerce et HubRise dépend de la configuration de WooCommerce Bridge, en particulier de la section **Métadonnées des articles de la commande**. Pour les détails de configuration, consultez [Métadonnées des articles de la commande](/apps/woocommerce/configuration#order-item-metadata).

Les produits WooCommerce dans une commande sont mappés à des produits avec ou sans SKU, selon les règles suivantes :

- Les produits simples sont envoyés à HubRise en tant que produits sans SKU.
- Les produits variables avec un attribut dont le nom correspond au champ **Clé(s) de métadonnées nom de la SKU** sont envoyés en tant que produits avec un SKU, où le nom de la SKU est la valeur de l'attribut.
- Les produits variables dont aucun attribut ne correspond au critère sont envoyés en tant que produits sans SKU.

Pour chaque article de la commande, WooCommerce Bridge envoie les informations suivantes à HubRise :

- `product_name` : nom du produit.
- `sku_name`: le nom de la SKU pour les produits ayant un SKU, ou `null` pour les produits sans. Voir la note ci-dessus pour plus de détails.
- `sku_ref` : code ref de l'article.
- `price` : prix unitaire de l'article.
- `quantity` : quantité d'articles dans la commande.
- `customer_notes`: notes de préparation du client pour l'article, dérivées de l'attribut ayant une clé correspondant au champ **Clé(s) de métadonnées commentaire client**, si disponible.
- `options`: un tableau d'options associé à l'article, provenant des attributs qui ne sont ni utilisés comme nom de SKU ni comme notes de préparation du client, et ne correspondent pas au champ **Clés de métadonnées ignorées**.

### Options

Si un produit contient une option, WooCommerce Bridge fournit les informations suivantes :

- `option_list_name` : emplacement réservé pour le nom de la liste d'options, avec la valeur par défaut "Options"
- `name` : nom de l'option

Un produit peut avoir au maximum une option rattachée.

<details>

<summary>Exemple de JSON pour un article unique avec une option</summary>

```json
"items": [
  {
    "product_name": "Végétarienne végane - Classique 30 cm",
    "sku_name": null,
    "sku_ref": "végétarienne_végane_classique_30cm",
    "price": "19.95 EUR",
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

### Frais

Les frais comprennent les frais d'expédition et les frais additionnels. Les champs envoyés sont les suivants :

- `name` : intitulé des frais. Pour les frais d'expédition, il s'agit de `Frais de livraison`.
- `ref` : Pour les frais d'expédition, le code ref défini dans la configuration WooCommerce Bridge. Pour les frais additionnels, ce champ est `null`.
- `price` : montant des frais.

<details>

<summary>Exemple de JSON pour les frais</summary>

```json
"charges": [
  {
    "name": "Delivery charge",
    "ref": "1111",
    "price": "3.50 EUR"
  }
]
```

</details>

### Remises

La remise appliquée à la commande est transmise dans un objet unique dans le tableau `discounts` de HubRise.

Les champs envoyés sont les suivants :

- `name` : nom de la remise
- `price_off` : montant total de la remise

### Champs personnalisés

L'objet `custom_fields` est utilisé par WooCommerce Bridge pour stocker les métadonnées que WooCommerce envoie dans la commande. Ces informations ne sont pas fournies par défaut par l'API WooCommerce, mais le format réel dépend des plugins installés et de la personnalisation du code effectuée sur le site internet.
