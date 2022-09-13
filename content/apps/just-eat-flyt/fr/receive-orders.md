---
title: Recevoir les commandes
position: 5
layout: documentation
meta:
title: Recevoir les commandes | Just Eat Flyt | HubRise
description: Découvrez le détail technique de la réception des commandes Just Eat dans HubRise, y compris les champs transmis ou non.
---

La connexion de Just Eat à HubRise vous permet de recevoir les commandes Just Eat directement dans votre solution d’encaissement. Cette page décrit les informations reçues par HubRise en provenance de Just Eat pour vos commandes.

## Articles et options

Les commandes Just Eat contiennent des informations complètes sur les articles et les options, y compris le nom, le code ref du point de vente, la quantité et le prix. Toutefois, les promotions ne sont pas prises en charge dans Just Eat.

De même, les avis formulés par les clients sur des produits individuels ne sont pas pris en charge dans Just Eat. Si vous utilisez ces commentaires pour la préparation de vos plats, vous devez créer un article pour chaque demande habituelle dans votre solution d'encaissement (par exemple « Cuisson à point » ou « Couper en tranches »), puis les inclure en tant qu'options dans votre menu Just Eat.

## Statuts des commandes

Les commandes Just Eat peuvent être marquées comme suit :

- `Succès` : la commande a été acceptée par la solution d'encaissement.
- `Échec` : l'envoi de la commande à la solution d'encaissement a échoué.

Les nouvelles commandes doivent être marquées comme `Successful` (succès) ou `Failed` (échec) dans les 3 minutes. Dans le cas contraire, Just Eat les marquera automatiquement comme `Failed`.

---

**REMARQUE IMPORTANTE :** vous ne pouvez actualiser le statut d'une commande qu'une seule fois. Les modifications ultérieures sont ignorées par Just Eat.

---

### Modification du statut d'une commande dans Just Eat

Lorsque le statut d'une commande passe à `rejected`(rejeté) ou `cancelled` (annulé) dans HubRise, Just Eat Bridge notifie à Just Eat que la commande a le statut `Failed` (échec).

Just Eat Bridge vous permet de décider quel statut de HubRise déclenche l'état `Successful` (succès) dans Just Eat. Cette option est utile pour gérer différents scénarios lorsque votre solution d'encaissement actualise le statut de la commande. Par exemple, si votre solution d'encaissement marque une commande acceptée comme ayant le statut `received` (reçu) dans HubRise, vous pouvez toujours faire en sorte que Just Eat reconnaisse que la commande a été acceptée.

Les autres valeurs de statut dans HubRise ne sont pas prises en charge ni envoyées à Just Eat.

### Modification du statut d'une commande dans HubRise

Just Eat Bridge ne modifie pas le statut des commandes dans HubRise.

## Types de service

Just Eat prend en charge trois types de service :

- Livraison par coursier Just Eat
- Livraison par la flotte du restaurant
- Retrait par les clients

Ces types sont généralement associés à des codes ref spécifiques dans votre solution d’encaissement, que vous pouvez définir sur la page de configuration de l'instance Bridge. Pour plus d'informations sur les codes ref, veuillez consulter la documentation de votre solution d’encaissement sur notre [page d'applications](/apps).

## Coordonnées client

Les coordonnées du client fournies par Just Eat dépendent du type de service associé à la commande.

- Pour les commandes livrées par le restaurant, HubRise reçoit les coordonnées complètes du client, y compris son nom et son adresse.
- Pour les commandes à emporter, seul le nom est indiqué.
- Pour les commandes livrées par Just Eat, seules les informations relatives au chauffeur sont fournies.

## Remises

Les remises ne sont pas prises en charge dans Just Eat et aucune information n'est fournie dans l'API.

## Frais

Just Eat Flyt Bridge encode deux types de frais : les frais de livraison et les frais de service supplémentaires.

---

## Références techniques

Cette section décrit la manière dont les commandes sont encodées dans les données utiles JSON reçues en provenance de Just Eat Flyt Bridge.

### Identifiant de commande Just Eat

Lorsqu'une nouvelle commande est créée dans HubRise, l'identifiant de la commande Just Eat est consignée dans le champ `collection_code`. Il s'agit de l'identifiant de référence de la commande que le client voit s'afficher sur la plateforme.

### Encodage des articles

Pour chaque article inclus dans la commande, Just Eat Flyt Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article.
- `product_name` : nom du produit.
- `price` : prix d'un article unique.
- `quantity` : quantité d'articles incluse dans la commande.
- `options` : sélection des options rattachées à l'article.

### Encodage des options

Pour chaque option incluse dans la commande, Just Eat Flyt Bridge indique les informations suivantes :

- `option_list_name` : emplacement réservé pour le nom de la liste d'options, comprenant la valeur par défaut « Options ».
- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'une option unique.

Chaque option se caractérise par une quantité unique. Les options multiples identiques sont encodées dans des objets d'option distincts.

<details>

Vous trouverez ci-dessous un exemple de données utiles contenant un article unique avec une option.

```json
"items": [
  {
    "product_name": "Crispy Chilli Chicken",
    "sku_ref": "2473",
    "price": "12.95 EUR",
    "quantity": "1",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Egg Fried Rice",
        "ref": "2043",
        "price": "0.35 EUR"
      }
    ]
  }
]
```

</details>

### Client

Just Eat Flyt Bridge ne crée jamais de clients dans HubRise pour les commandes Just Eat, mais inclut toujours les coordonnées du client dans l'objet `customer`, lorsqu'elles sont disponibles.

Le nom et le prénom du client sont indiqués dans les champs `first_name` et `last_name`. Un client peut décider de ne pas renseigner l'un des deux champs, auquel cas le champ reste vide dans les données utiles.

L'emplacement par défaut `customer@email.hidden` sert à alimenter le champ `email` pour tous les clients.

Pour les commandes avec livraison par le restaurant uniquement, Just Eat Flyt Bridge reçoit les informations suivantes en provenance de Just Eat :

- `address_1` : première ligne de l'adresse.
- `address_2` : deuxième ligne de l'adresse.
- `city` : ville de l'adresse.
- `postal_code` : code postal de l'adresse.
- `latitude` : latitude de l'adresse.
- `longitude` : longitude de l'adresse.
- `phone` : numéro d'assistance de Just Eat. Remarque : il ne s'agit pas du numéro de téléphone du client.
- `delivery_notes` : notes de livraison que le client a incluses au moment du paiement.

<details>

Vous trouverez ci-dessous un exemple de données utiles contenant les coordonnées du client.

```json
"customer": {
    "email": "customer@email.hidden",
    "first_name": "Jane",
    "last_name": "Black",
    "phone": "0131 000 0000",
    "address_1": "2 High St",
    "address_2": "",
    "postal_code": "EH1 1PG",
    "city": "Edinburgh",
    "delivery_notes": "Don't ring the bell",
    "latitude": "55.949779",
    "longitude": "-3.190822"
  }
```

</details>

### Frais de livraison

Des frais de livraison sont appliqués aux commandes livrées par le restaurant.

Les champs disponibles dans les données utiles sont les suivants :

- `name` : intitulé des frais de livraison (par défaut, « Frais de livraison »).
- `type` : type de frais. Ce paramètre est toujours défini sur la valeur `delivery`.
- `ref` : code ref des frais. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Bridge. Elle doit correspondre à la valeur définie dans votre solution d’encaissement.
- `price` : montant total des frais de livraison.

### Supplément Just Eat

Just Eat applique un supplément forfaitaire à toutes les commandes.

Les champs disponibles dans les données utiles sont les suivants :

- `name` : intitulé des frais (par défaut, « Frais de service »).
- `type` : type de frais. Ce paramètre est toujours défini sur la valeur `other`.
- `ref` : code ref des frais. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Bridge. Elle doit correspondre à la valeur définie dans votre solution d’encaissement.
- `price` : montant total du petit supplément à la commande.

<details>

Voici un exemple de données utiles pour les frais.

```json
"charges": [
  {
    "type": "delivery",
    "name": "Delivery charge",
    "ref": "1111",
    "price": "3.50 EUR"
  },
  {
    "type": "other",
    "name": "Service charge",
    "ref": 2222,
    "price": "0.50 EUR"
  }
]
```

</details>

### Prix total

Le prix global réglé pour la commande, y compris les frais appliqués, est encodé dans le champ `total`.
