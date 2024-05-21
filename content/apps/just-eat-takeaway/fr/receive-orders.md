---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 6
layout: documentation
meta:
  title: Recevoir des commandes | Just Eat Takeaway | HubRise
  description: Découvrez les détails techniques sur la récupération des commandes de Just Eat Takeaway à HubRise, et quels champs sont transmis ou non.
---

En connectant Just Eat Takeaway à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Cette page décrit les informations reçues par HubRise en provenance de Just Eat Takeaway pour vos commandes.

## Articles et options

Les commandes Just Eat Takeaway contiennent les informations complètes sur les articles et les options, par exemple le nom, le code ref du logiciel de caisse, la quantité et le prix. Cependant, les promotions ne sont pas prises en charge.

## Statuts de commande

---

**REMARQUE IMPORTANTE:** Dans cette section, nous mettons en majuscule la première lettre des statuts Just Eat pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Confirmed` (Confirmé) est un statut Just Eat, tandis que `accepted` est un statut HubRise.

---

### Statuts Just Eat

Une commande Just Eat passe par plusieurs statuts au cours de son cycle de vie :

- `Confirmed` : la commande a été confirmée
- `Error` : une erreur s'est produite. Un représentant de Just Eat Takeaway appellera le restaurant.
- `Kitchen` : le restaurant a commencé à préparer la commande.
- `In Delivery` : la commande est en cours de livraison
- `Delivered` : la commande a été livrée

Just Eat Takeaway attend au minimum que chaque commande réussie soit marquée comme `Confirmed`.

### Lorsque le statut change dans HubRise

Lorsque le statut d'une commande change dans HubRise, Just Eat Takeaway Bridge en informe Just Eat Takeaway. La correspondance entre les statuts HubRise et Just Eat Takeaway est la suivante :

| Statut HubRise                               | Statut Just Eat Takeaway                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `new`, `received` ou `accepted`              | Vous pouvez déterminer quel statut fait passer la commande en mode `Confirmed`. |
| `rejected`, `cancelled` ou `delivery_failed` | `Error`                                                                                         |
| `in_preparation`                             | `Kitchen`                                                                                       |
| `in_delivery`                                | `In Delivery`                                                                                   |
| `completed`                                  | `Delivered`                                                                                     |

Just Eat Takeaway Bridge vous permet de décider quel statut HubRise déclenche le statut `Confirmed`. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` dans HubRise, vous pouvez toujours signaler à Just Eat Takeaway que la commande a été confirmée.

Les autres valeurs de statut HubRise ne sont pas prises en charge ni envoyées à Just Eat Takeaway.

### Lorsque le statut change dans Just Eat

Just Eat Bridge ne modifie pas le statut des commandes dans HubRise. Si une commande est annulée par Just Eat, HubRise ne sera pas notifié.

## Types de service

Just Eat Takeaway prend en charge trois types de service :

- Livraison par coursier Just Eat Takeaway
- Livraison par un livreur du restaurant
- Retrait par les clients

Ces types sont généralement associés à des codes ref spécifiques dans votre logiciel de caisse, que vous pouvez définir sur la page de configuration du Bridge. Pour plus d'informations sur les codes ref, consultez la documentation de votre logiciel de caisse sur notre [page Apps](/apps).

## Horaires des commandes

Pour les commandes livrées par le restaurant, Just Eat fournit l'heure à laquelle le client attend la livraison de sa commande. Pour les autres types de commandes, il fournit l'heure à laquelle la commande doit être prête à emporter, que ce soit par le client ou par un livreur. Dans les deux cas, l'horaire est transmis à HubRise via le champ `expected_time`.

Pour définir un horaire différent, mettez à jour le champ `confirmed_time` dans HubRise. Just Eat Takeaway Bridge enverra l'horaire mis à jour à Just Eat Takeaway lorsque le statut de la commande passera à `Confirmed`. La mise à jour de ce champ après que la commande a été confirmée n'aura aucun effet.

## Données clients

Les coordonnées complètes du client sont fournies par Just Eat Takeaway pour toutes les commandes, quel que soit le type de service.
L'adresse e-mail n'étant jamais fournie par Just Eat Takeaway, ce champ est toujours manquant dans HubRise.

## Remises et frais

Dans la commande, vous trouverez des informations sur les remises, frais de livraison et frais de service Just Eat Takeaway, le cas échéant.

---

## Référence technique

Cette section explique comment les commandes sont encodées dans les requêtes JSON que vous recevez de Just Eat Takeaway Bridge.

### Identifiant de commande Just Eat Takeaway

Lorsqu'une nouvelle commande est créée dans HubRise, l'identifiant de la commande Just Eat Takeaway est consigné dans le champ `collection_code`.
Il s'agit de l'identifiant de référence de la commande que le client voit s'afficher sur la plateforme.

### Articles

Pour chaque article inclus dans la commande, Just Eat Takeaway Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article
- `product_name` : nom du produit
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande
- `options` : options associées à l'article
- `customer_notes` : notes de préparation que le client a ajoutées à l'article

### Options

Pour chaque option incluse dans la commande, Just Eat Bridge indique les informations suivantes :

- `option_list_name : emplacement réservé pour le nom de la liste d'options, avec la valeur par défaut "Options"
- `ref` : code ref de l'option
- `name` : nom de l'option
- `price` : prix unitaire de l'article

Chaque option a une quantité égale à 1. Les options multiples identiques sont encodées dans des objets d'option distincts.

<details>

<summary>Exemple de requête JSON contenant un article unique avec plusieurs options</summary>

```json
"items": [
  {
    "product_name": "Eiernoedels",
    "sku_ref": "1",
    "price": "4.50 EUR",
    "quantity": "1",
    "customer_notes": "Not too salty, please!",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Rundvlees",
        "ref": "102",
        "price": "2.25 EUR"
      },
      {
        "option_list_name": "Options",
        "name": "Extra garnalen",
        "ref": "116",
        "price": "2.45 EUR"
      },
      {
        "option_list_name": "Options",
        "name": "Teriyaki saus",
        "ref": "121",
        "price": "0.00 EUR"
      }
    ]
  }
]
```

</details>

### Client

Just Eat Takeaway Bridge inclut toujours les coordonnées du client dans l'objet `customer`.

Le nom du client est fourni sous la forme d'un champ unique par Just Eat Takeaway.
Les champs `first_name` et `last_name` sont créés dans HubRise en séparant le nom complet au niveau du premier caractère espace.

Just Eat Takeaway Bridge reçoit de Just Eat les informations suivantes concernant l'adresse du client, si elles sont disponibles dans les requêtes d'origine :

- `address_1` : rue et numéro
- `city` : ville
- `postal_code` : code postal
- `phone` : numéro de téléphone du client
- `delivery_notes` : notes de livraison que le client laisse au moment du paiement
- `company_name` : nom de la société à laquelle appartient le client

<details>

<summary>Exemple de requête JSON avec les coordonnées du client</summary>

```json
"customer": {
  "first_name": "John",
  "company_name": "HubRise",
  "phone": "+3333233232",
  "address_1": "1 Street",
  "postal_code": "8888AB",
  "city": "Alpha",
  "delivery_notes": "companyname: HubRise"
}
```

</details>

### Remises

La remise appliquée à la commande est transmise en tant qu'objet unique dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise, par défaut `Discount`
- `ref` : code ref de la remise La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Takeaway Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price_off` : montant total de la remise

<details>

<summary>Exemple de requête JSON pour les remises</summary>

```json
"discounts": [
  {
    "name": "10% off",
    "ref": "TH99",
    "price_off": "0.50 EUR"
  }
]
```

</details>

### Frais de livraison

Des frais de livraison s'appliquent aux commandes livrées par le restaurant. Just Eat Takeaway Bridge encode cette information dans le tableau `charges`.

Voici les champs utilisés pour spécifier les frais de livraison :

- `name` : toujours défini sur `Delivery charge`
- `type` : type de frais Toujours défini sur `delivery`.
- `ref` : code ref des frais Vous pouvez définir sa valeur depuis la page de configuration de Just Eat Bridge. Assurez-vous qu'elle correspond à la valeur dans votre logiciel de caisse.
- `price` : montant des frais de livraison

<details>

<summary>Exemple de requête JSON pour les frais de livraison</summary>

```json
"charges": [
  {
    "name": "Delivery charge",
    "type": "delivery",
    "ref": "TH77",
    "price": "1.50 EUR"
  }
]
```

</details>

### Frais de service

Les frais de service, lorsqu'ils sont appliqués, sont également représentés dans le tableau `charges`.

Voici les champs utilisés pour les frais de service :

- `name` : toujours défini sur `Service fee`
- `type` : Toujours défini sur `other`
- `ref` : code ref des frais Vous pouvez définir sa valeur depuis la page de configuration de Just Eat Bridge. Assurez-vous qu'elle correspond à la valeur dans votre logiciel de caisse.
- `price` : montant des frais de service

## Notes de préparation du client

Les notes de préparation du client au niveau du produit sont encodées dans le champ `customer_notes`.
