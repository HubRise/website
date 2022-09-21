---
title: Recevoir les commandes
position: 6
layout: documentation
meta:
  title: Recevoir les commandes | Just Eat Takeaway | HubRise
  description: Découvrez le détail technique sur la réception des commandes Just Eat Takeaway dans HubRise, y compris le temps de réponse, et les champs transmis ou non.
---

La connexion de Just Eat Takeaway à HubRise vous permet de recevoir les commandes directement dans votre solution d'encaissement. Cette page décrit les informations reçues par HubRise en provenance de Just Eat Takeaway pour vos commandes.

## Articles et options

Les commandes Just Eat Takeaway contiennent des informations complètes sur les articles et les options, y compris le nom, le code ref du point de vente, la quantité et le prix. Toutefois, les promotions ne sont pas prises en charge.

## Autres statuts

Une commande Just Eat passe par plusieurs statuts au cours de son cycle de vie :

- `Confirmé` : la commande a été confirmée.
- `Erreur` : une erreur s'est produite. Un représentant de Just Eat Takeaway appelle le restaurant.
- `Cuisine` : le restaurant a commencé à préparer la commande.
- `En cours de livraison` : la commande est en cours de livraison.
- `Livré` : la commande a été livrée.

Just Eat Takeaway attend au minimum que chaque commande réussie soit marquée comme ayant le statut `Confirmé`.

### Modification du statut d'une commande dans Just Eat Takeaway

Lorsque le statut d'une commande change dans HubRise, Just Eat Takeaway Bridge en informe Just Eat Takeaway. La correspondance entre les statuts de HubRise et de Just Eat Takeaway est la suivante :

| Statut dans HubRise                               | Statut dans Just Eat Takeaway                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `new` (nouveau), `received` (reçu) ou `accepted` (accepté)              | Vous pouvez déterminer quel statut fait passer la commande en mode `Confirmé`. |
| `rejected` (rejeté), `cancelled` (annulé) ou `delivery_failed` (échec de la livraison) | `Erreur`                                                                    |
| `in_preparation (en cours de préparation)`                             | `Cuisine`                                                                  |
| `in_delivery (en cours de livraison)`                                | `En livraison`                                                              |
| `completed (terminé)`                                  | `Livré`                                                                |

Just Eat Takeaway Bridge vous permet de décider quel statut de HubRise déclenche l'état `Confirmé`. Cette option est utile pour gérer différents scénarios lorsque votre solution d'encaissement actualise le statut de la commande. Par exemple, si votre solution d'encaissement marque une commande acceptée comme ayant le statut `received` (reçu) dans HubRise, vous pouvez toujours faire en sorte que Just Eat Takeaway reconnaisse que la commande a été confirmée.

Les autres valeurs de statut dans HubRise ne sont pas prises en charge ni envoyées à Just Eat Takeaway.

### Modification du statut d'une commande dans HubRise

Just Eat Takeaway Bridge ne modifie pas le statut des commandes dans HubRise.

## Types de service

Just Eat Takeaway prend en charge trois types de service :

- Livraison par coursier Just Eat Takeaway
- Livraison par la flotte du restaurant
- Retrait par les clients

Ces types sont généralement associés à des codes ref spécifiques dans votre solution d'encaissement, que vous pouvez définir sur la page de configuration de l'instance Bridge. Pour plus d'informations sur les codes ref, veuillez consulter la documentation de votre solution d'encaissement sur notre [page d'applications](/apps).

## Coordonnées client

Les coordonnées complètes du client sont fournies par Just Eat Takeaway pour toutes les commandes, quel que soit le type de service. L'adresse e-mail n'étant jamais fournie par Just Eat Takeaway, ce champ est toujours manquant dans HubRise.

## Remises et frais

Dans la commande, vous pouvez trouver des informations sur les remises et les frais de livraison de Just Eat Takeaway, s'ils sont présents.

---

## Références techniques

Cette section décrit la manière dont les commandes sont encodées dans les données utiles JSON reçues en provenance de Just Eat Takeaway Bridge.

### Identifiant de commande Just Eat Takeaway

Lorsqu'une nouvelle commande est créée dans HubRise, l'identifiant de la commande Just Eat Takeaway est consigné dans le champ `collection_code`. Il s'agit de l'identifiant de référence de la commande que le client voit s'afficher sur la plateforme.

### Articles

Pour chaque article inclus dans la commande, Just Eat Takeaway Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article.
- `product_name` : nom du produit.
- `price` : prix d'un article unique.
- `quantity` : quantité d'articles incluse dans la commande.
- `options` : sélection des options rattachées à l'article.
- `customer_notes` : notes de préparation que le client a ajoutées à l'article.

### Options

Pour chaque option incluse dans la commande, Just Eat Bridge indique les informations suivantes :

- `option_list_name` : emplacement réservé pour le nom de la liste d'options, comprenant la valeur par défaut « Options ».
- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'un article unique.

Chaque option se caractérise par une quantité unique. Les options multiples identiques sont encodées dans des objets d'option distincts.

<details>

Vous trouverez ci-dessous un exemple de données utiles contenant un article unique avec une option.

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

Le nom du client est fourni sous forme champ unique par Just Eat Takeaway. Les champs `first_name` et `last_name` sont créés dans HubRise en séparant le nom complet par le premier caractère d'espace.

Just Eat Takeaway Bridge reçoit de Just Eat les informations suivantes concernant l'adresse du client, si elles sont disponibles dans les données utiles d'origine :

- `address_1` : rue et numéro.
- `city` : ville de l'adresse.
- `postal_code` : code postal de l'adresse.
- `phone` : numéro de téléphone du client.
- `delivery_notes` : notes de livraison que le client a incluses au moment du paiement.
- `company_name` : nom de la société à laquelle appartient le client.

<details>

Vous trouverez ci-dessous un exemple de données utiles contenant les coordonnées du client.

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

La remise appliquée à la commande est transmise sous forme d'objet unique contenu dans le tableau `discounts` de HubRise.

Les champs disponibles dans les données utiles sont les suivants :

- `name` : nom de la remise, soit « Remise » par défaut.
- `ref` : code ref de la remise. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Takeaway Bridge. Elle doit correspondre à la valeur définie dans votre solution d’encaissement.
- `price_off` : montant total de la remise.

<details>

Voici un exemple de données utiles pour les remises.

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

Des frais de livraison sont appliqués aux commandes livrées par le restaurant. Just Eat Takeaway Bridge encode cette information dans le tableau `charges`.

Les champs disponibles dans les données utiles sont les suivants :

- `name` : intitulé des frais de livraison (par défaut, « Frais de livraison »).
- `type` : type de frais. Ce paramètre est toujours défini sur la valeur `delivery`.
- `ref` : code ref des frais. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Bridge. Elle doit correspondre à la valeur définie dans votre solution d’encaissement.
- `price` : montant total des frais de livraison.

<details>

Voici un exemple de données utiles pour les frais.

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

## Notes du client

Les notes du client au niveau du produit sont encodées dans le champ `customer_notes`.

